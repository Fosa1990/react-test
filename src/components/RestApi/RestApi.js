// https://hn.algolia.com/api
// https://hn.algolia.com/api/v1/search?query=react

import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: var(--white);
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: var(--yellow);
  }
`;

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <StyledLink href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </StyledLink>
      </li>
    ))}
  </ul>
);

class RestApi extends Component {
  state = {
    articles: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(response =>
        this.setState({ articles: response.data.hits, isLoading: false }),
      );
  }

  render() {
    const { articles, isLoading } = this.state;

    return isLoading ? <p>Loading...</p> : <ArticleList articles={articles} />;
  }
}

export default RestApi;
