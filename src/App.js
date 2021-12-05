import './App.css';
import Form from './components/Form/';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import SignUpFormCheckbox from './components/SignUpFormCheckbox';
import RadioButtons from './components/RadioButtons';
import SignUpFormFinal from './components/SignUpFormFinal';
import Lifecycle from './components/Lifecycle';
import Title from './components/Title';
import FetchApi from './components/FetchApi';
import { Link, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import styled from 'styled-components';

const LinkRouteStyled = styled(Link)`
  color: var(--yellow);
  text-decoration: none;
`;

const Component1 = () => {
  return (
    <Fragment>
      <hr />
      <p>
        <span style={{ color: 'var(--green)' }}>Routing to: </span>
        <span style={{ color: 'var(--red)' }}>Component "1" </span>
        <span style={{ color: 'var(--white)' }}>watch to URL (^_^)</span>
      </p>
      <hr />
    </Fragment>
  );
};
const Component2 = () => {
  return (
    <Fragment>
      <hr />
      <p>
        <span style={{ color: 'var(--green)' }}>Routing to: </span>
        <span style={{ color: 'var(--red)' }}>Component "2" </span>
        <span style={{ color: 'var(--white)' }}>watch to URL (^_^)</span>
      </p>
      <hr />
    </Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <hr />
        <LinkRouteStyled to="/component1">
          <span style={{ color: 'var(--green)' }}>New React </span>
          Routing: Link to Components 1
        </LinkRouteStyled>
        <LinkRouteStyled to="/component2">
          <span style={{ color: 'var(--green)' }}>New React </span>
          Routing: Link to Components 2
        </LinkRouteStyled>
        <hr />
        <Routes>
          <Route path="/component1" element={<Component1 />} />
          <Route path="/component2" element={<Component2 />} />
        </Routes>
        <hr />
        <Title title={'Component: FetchApi'}></Title>
        <FetchApi></FetchApi>
        <hr />
        <Title title={'Component: Lifecycle'}></Title>
        <p>Open console (^_^)</p>
        <Lifecycle></Lifecycle>
        <hr />
        <Title title={'Component: Form'}></Title>
        <Form></Form>
        <hr />
        <Title title={'Component: LoginForm'}></Title>
        <LoginForm></LoginForm>
        <hr />
        <Title title={'Component: SignUpForm'}></Title>
        <SignUpForm></SignUpForm>
        <hr />
        <Title title={'Component: SignUpFormCheckbox'}></Title>
        <SignUpFormCheckbox></SignUpFormCheckbox>
        <hr />
        <Title title={'Component: RadioButtons'}></Title>
        <RadioButtons></RadioButtons>
        <hr />
        <Title title={'Component: SignUpFormFinal'}></Title>
        <SignUpFormFinal></SignUpFormFinal>
        <hr />
      </header>
    </div>
  );
}

export default App;
