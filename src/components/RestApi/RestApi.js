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
  };

  componentDidMount() {
    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(response => this.setState({ articles: response.data.hits }));
  }

  render() {
    const { articles } = this.state;

    return articles.length > 0 ? <ArticleList articles={articles} /> : null;
  }
}

export default RestApi;
