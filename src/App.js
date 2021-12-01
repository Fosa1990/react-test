import logo from './logo.svg';
import './App.css';
import SignUpFormCheckbox from './components/SignUpFormCheckbox';
// import SignUpForm from './components/SignUpForm';
// import LoginForm from './components/LoginForm';
// import Form from './components/Form/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SignUpFormCheckbox></SignUpFormCheckbox>
        {/* <SignUpForm></SignUpForm> */}
        {/* <LoginForm></LoginForm> */}
        {/* <Form></Form> */}
      </header>
    </div>
  );
}

export default App;
