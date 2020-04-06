import React, { useState, useEffect } from "react";
import products from "./products.json";
import GetData from "./components/GetData";

// console.log("products", products);
const initialState = {
  word: "work",
  products: [],
};

const defaultInputValue = { initialState };
const App = () => {
  const [state, setState] = useState(initialState);
  const [tasks, setTasks] = useState({ task: "", description: "" });

  // console.log("state", state);
  const handleClick = () => {
    console.log("click");
    setState({
      ...state,
      word: "tasks",
      products: products,
      // param: "yes",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks({ task: "", description: "" });
  };

  const handleChange = (e) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h4>IT WORKS</h4>
      {/* <p>{state.word}</p> */}
      <button onClick={handleClick}>BUTTON</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Enter your text..."
          onChange={handleChange}
          value={tasks.task}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter your text..."
          onChange={handleChange}
          value={tasks.description}
        />
        <button type="submit">CLICK</button>
      </form>
    </div>
  );
};

export default App;
