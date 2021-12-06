import { Link, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import styled from 'styled-components';
import Component1 from './Component1';
import Component2 from './Component2';

const LinkStyled = styled(Link)`
  color: var(--yellow);
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const NewRouting = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <LinkStyled to="/Main">
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
      </ul>

      <Routes>
        <Route path="/main" element={<Fragment></Fragment>} />
        <Route path="/component1" element={<Component1 />} />
        <Route path="/component2" element={<Component2 />} />
      </Routes>
    </Fragment>
  );
};

export default NewRouting;
