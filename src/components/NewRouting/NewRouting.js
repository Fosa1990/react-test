import { Link, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import styled from 'styled-components';
import Component1 from './Component1';
import Component2 from './Component2';
import Main from './Main';
import Error from './Error';

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
        <li>
          <LinkStyled to="/main">
            <span style={{ color: 'var(--green)' }}>New React </span>
            Routing: Link to Main
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/component1">
            <span style={{ color: 'var(--green)' }}>New React </span>
            Routing: Link to Component 1
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/component2">
            <span style={{ color: 'var(--green)' }}>New React </span>
            Routing: Link to Component 2
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/error">
            <span style={{ color: 'var(--green)' }}>New React </span>
            Routing: Link to Error [not complete yet]
          </LinkStyled>
        </li>
      </ul>

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/component1" element={<Component1 />} />
        <Route path="/component2" element={<Component2 />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Fragment>
  );
};

export default NewRouting;
