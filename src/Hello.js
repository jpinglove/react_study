import React, { useState } from "react";
// import Counter from "./Counter"

var mystyle = { color: "red", textAlign: "center" };

// const elem = <h3>the first react program.</h3>;

class Name extends React.Component {
  render() {
    return <h1 style={mystyle}>网站名称：{this.props.name}</h1>;
  }
}

class Url extends React.Component {
  render() {
    return <h1>网址是:{this.props.url}</h1>;
  }
}

class Wellcome extends React.Component {
  render() {
    return <h1>网址是:{this.props.attri}</h1>;
  }
}

function Cnt() {
  const [count, setCount] = useState(99);
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h1>
          now {this.props.age} time:{this.state.date.toLocaleString()}
        </h1>
      </div>
    );
  }
}

Clock.defaultProps = {
  age: 88,
};

function Hello(props) {
  return (
    <>
      <Clock attr={"lol-"} />
      {/* <Counter count={5}></Counter> */}
      <Cnt count={2}></Cnt>
      <Wellcome attri={"wellcom attribute."} />
      <Name name={props.name} />
      <Url url={props.url} />
      <h1>Hello world.</h1>
      <h2>now is : {new Date().toLocaleString()}.</h2>
    </>
  );
}
export default Hello;
