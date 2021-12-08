// https://hn.algolia.com/api
// https://hn.algolia.com/api/v1/search?query=react

import React, { Component, Fragment } from 'react';
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
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(response => this.setState({ articles: response.data.hits }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <Fragment>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </Fragment>
    );
  }
}

export default RestApi;
