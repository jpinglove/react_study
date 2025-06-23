import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import Greeting from './Greeting'
import UserProfit from "./Private/UserProfit";
import Button from "./components/Button";

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

        {/* <Hello name={"jonathan"} url={"www.aabb.com"}></Hello> */}

        <Greeting></Greeting>
          <UserProfit></UserProfit>
          <Button></Button>
      </header>
    </div>
  );
}

export default App;
