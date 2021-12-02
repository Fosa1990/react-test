import logo from './logo.svg';
import './App.css';
import Form from './components/Form/';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import SignUpFormCheckbox from './components/SignUpFormCheckbox';
import RadioButtons from './components/RadioButtons';
import SignUpFormFinal from './components/SignUpFormFinal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form></Form>
        <hr />
        <LoginForm></LoginForm>
        <hr />
        <SignUpForm></SignUpForm>
        <hr />
        <SignUpFormCheckbox></SignUpFormCheckbox>
        <hr />
        <RadioButtons></RadioButtons>
        <hr />
        <SignUpFormFinal></SignUpFormFinal>
      </header>
    </div>
  );
}

export default App;
