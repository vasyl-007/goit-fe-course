import React, { useContext, createContext } from "react";

const MyContext = createContext();

const SomeContext = () => {
  const value = useContext(MyContext);
  return <p>{value}</p>;
};

export default SomeContext;
