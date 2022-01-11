import { Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import FetchAndLifecycle from './FetchAndLifecycle';
import Forms from './Forms';
import Main from './Main';
import Error from './Error';
import Counter from '../Counter';
import RestApi from '../RestApi';

const NewRouting = () => {
  return (
    <>
      <List>
        <ListItem>
          <LinkStyled to="/main">Main</LinkStyled>
        </ListItem>

        <ListItem>
          <LinkStyled to="/forms">Forms</LinkStyled>
        </ListItem>

        <ListItem>
          <LinkStyled to="/fetchandlifecycle">Fetch &amp; Lifecycle</LinkStyled>
        </ListItem>

        <ListItem>
          <LinkStyled to="/restapi">REST API</LinkStyled>
        </ListItem>

        <ListItem>
          <LinkStyled to="/counter">Counter</LinkStyled>
        </ListItem>

        <ListItem>
          <LinkStyled to="/error">Error</LinkStyled>
        </ListItem>
      </List>

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/fetchandlifecycle" element={<FetchAndLifecycle />} />
        <Route path="/restapi" element={<RestApi />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

const List = styled.ul`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  list-style-type: none;
  :hover {
    color: var(--yellow);
  }
`;

const LinkStyled = styled(Link)`
  color: var(--yellow);
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: var(--green);
  }
`;

export default NewRouting;
