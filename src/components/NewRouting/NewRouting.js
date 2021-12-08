import { Link, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import styled from 'styled-components';
import FetchAndLifecycle from './FetchAndLifecycle';
import Forms from './Forms';
import Main from './Main';
import Error from './Error';
import RestApi from '../RestApi';

const ListItem = styled.li`
  list-style-type: circle;
  :hover {
    list-style-type: disc;
    color: var(--yellow);
  }
`;

const LinkStyled = styled(Link)`
  color: var(--yellow);
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: white;
  }
`;

const NewRouting = () => {
  return (
    <Fragment>
      <ul>
        <ListItem>
          <LinkStyled to="/main">
            <span style={{ color: 'var(--green)' }}>New Routing: </span>Main
          </LinkStyled>
        </ListItem>

        <ListItem>
          <LinkStyled to="/forms">
            <span style={{ color: 'var(--green)' }}>New Routing: </span>
            Forms
          </LinkStyled>
        </ListItem>

        <ListItem>
          <LinkStyled to="/fetchandlifecycle">
            <span style={{ color: 'var(--green)' }}>New Routing: </span>
            Fetch &amp; Lifecycle
          </LinkStyled>
        </ListItem>

        <ListItem>
          <LinkStyled to="/restapi">
            <span style={{ color: 'var(--green)' }}>New Routing: </span>
            REST API
          </LinkStyled>
        </ListItem>

        <ListItem>
          <LinkStyled to="/error">
            <span style={{ color: 'var(--green)' }}>New Routing: </span>Error
            [not complete yet]
          </LinkStyled>
        </ListItem>
      </ul>

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/fetchandlifecycle" element={<FetchAndLifecycle />} />
        <Route path="/restapi" element={<RestApi />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Fragment>
  );
};

export default NewRouting;
