import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import HooksOne from "./HooksOne";

const App = () => {
  const PlanetInfo = ({ id }) => {
    const [name, setName] = useState(null);

    useEffect(() => {
      fetch(`https://swapi.co/api/planets/${id}`)
        .then((res) => res.json())
        .then((data) => setName(data.name));
      return (
        <div>
          {id} - {name}
        </div>
      );
    }, [id]);
  };

  return (
    <Fragment>
      <h4>IT WORKS</h4>
      <HooksOne />
      <PlanetInfo id={3} />
    </Fragment>
  );
};

export default App;
