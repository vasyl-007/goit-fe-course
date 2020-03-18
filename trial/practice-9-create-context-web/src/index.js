import React, { Component, createContext } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const MyContext = createContext();

class MyContextProvider extends Component {
  state = {
    text: Date.now()
  };
  changeText = () => this.setState({ text: Date.now() });

  render() {
    return (
      <MyContext.Provider
        value={{ text: this.state.text, onChange: this.changeText }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Button = () => (
  <MyContext.Consumer>
    {context => {
      console.log(context);
      return <button onClick={context.onChange}>{context.text}</button>;
    }}
  </MyContext.Consumer>
);

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <h1>Hello Context in React</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Button />
      </MyContextProvider>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
