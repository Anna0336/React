import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
       <h3>Hello, {props.name}</h3>
        <p> {props.text}</p>
      </header>
    </div>
  );
}

export default App;
