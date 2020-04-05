import React, { hooks, useState } from "react";

const Person = () => {
  const [name, setPerson] = useState({
    firstName: "Bob",
    lastName: "Smith",
  });
  setPerson((name) => {
    return { ...name, firstName: "Mike" };
  });
};
export default Person;
