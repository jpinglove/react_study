import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/A555pp.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lear000n React
        </a> */}

        <Hello name={"jonathan"} url={"www.aabb.com"}></Hello>
      </header>
    </div>
  );
}

export default App;
