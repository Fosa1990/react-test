import './App.css';

import Title from './components/Title';
import NewRouting from './components/NewRouting';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Title title={'Component: App'}></Title>
        <Title title={'Component: NewRouting'}></Title>
        <NewRouting />
        <hr />
      </main>
    </div>
  );
}

export default App;
