import React from 'react';
import { Fragment } from 'react';
import Title from '../Title';
import Form from '../Form/';
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';
import SignUpFormCheckbox from '../SignUpFormCheckbox';
import RadioButtons from '../RadioButtons';
import SignUpFormFinal from '../SignUpFormFinal';

const Component2 = () => {
  return (
    <Fragment>
      <hr />
      <p>
        <span style={{ color: 'var(--green)' }}>Routing to: </span>
        <span style={{ color: 'var(--red)' }}>Component "2" </span>
        <span style={{ color: 'var(--white)' }}>watch to URL (^_^)</span>
      </p>

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
    </Fragment>
  );
};

export default Component2;
