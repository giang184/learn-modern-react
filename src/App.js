import './App.css';

function App() {
  const title = "Welcome!"
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        {Math.random()*10}
      </div>
    </div>
  );
}

export default App;
