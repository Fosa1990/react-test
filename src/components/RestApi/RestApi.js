// https://hn.algolia.com/api
// https://hn.algolia.com/api/v1/search?query=react

import React, { Component, Fragment } from 'react';
import articlesApi from '../../services/articlesApi';
import styled from 'styled-components';

const StyledList = styled.ul`
  margin: 0 20px;
`;

const StyledListItem = styled.li`
  list-style-type: number;
  :hover {
    list-style-type: number;
    color: var(--yellow);
  }
`;

const StyledLink = styled.a`
  color: var(--blue);
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: var(--yellow);
  }
`;

const ArticleList = ({ articles }) => (
  <StyledList>
    {articles.map(({ objectID, url, title }) => (
      <StyledListItem key={objectID}>
        <StyledLink href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </StyledLink>
      </StyledListItem>
    ))}
  </StyledList>
);

class RestApi extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    articlesApi
      .fetchArticlesWithQuery('react')
      .then(articles => this.setState({ articles }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <Fragment>
        <hr />
        <p>
          <span style={{ color: 'var(--green)' }}>Routed to: </span>
          <span style={{ color: 'var(--red)' }}>"REST API" </span>
        </p>

        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </Fragment>
    );
  }
}

export default RestApi;
