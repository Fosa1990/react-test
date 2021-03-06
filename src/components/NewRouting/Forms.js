import React from 'react';
import Title from '../Title';
import Form from '../Form';
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';
import SignUpFormCheckbox from '../SignUpFormCheckbox';
import RadioButtons from '../RadioButtons';
import SignUpFormFinal from '../SignUpFormFinal';

const Forms = () => {
  return (
    <>
      <hr />
      <p>
        <span style={{ color: 'var(--green)' }}>Routed to: </span>
        <span style={{ color: 'var(--red)' }}>"Forms" </span>
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
    </>
  );
};

export default Forms;
