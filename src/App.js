import logo from './logo.svg';
import './App.css';
import Form from './components/Form/';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import SignUpFormCheckbox from './components/SignUpFormCheckbox';
import RadioButtons from './components/RadioButtons';
import SignUpFormFinal from './components/SignUpFormFinal';
import Lifecycle from './components/Lifecycle';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Title title={'Component: Lifecycle'}></Title>
        <p>Open console (^_^)</p>
        <Lifecycle></Lifecycle>
      </header>
    </div>
  );
}

export default App;
