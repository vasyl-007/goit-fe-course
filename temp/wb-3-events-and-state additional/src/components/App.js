import React, { Fragment } from "react";
import Product from "./Product";
import Panel from "./Panel";
import ProfileDetails from "./ProfileDetails";
import Portfolio from "./Portfolio";
import Mailbox from "./Mailbox";
import TechList from "./TechList";
import ProductList from "./ProductList";
import products from "../products.json";
import Dropdown from "./Dropdown";
import Counter from "./Counter";

const technologies = [
  { id: "id-1", name: "JS" },
  { id: "id-2", name: "React" },
  { id: "id-3", name: "React Router" },
  { id: "id-4", name: "Redux" }
];

const App = () => (
  <Fragment>
    <Counter step={5} initialValue={2050} />
    <hr />
    <Dropdown />
    <Mailbox unreadMessages={[1, 2, 3]} />
    <Panel title="Authorisation panel">
      <ProfileDetails name="Ricky" email="ricky.margin@gmail.com" />
      <Portfolio
        workOne="JoJo's Bizarre Adventure"
        workTwo="Thriller"
        workThree="African adventure"
      />
    </Panel>
    <Product
      name="John Wick 4K Ultra Hd [Blu-ray]"
      imageUrl="https://images-na.ssl-images-amazon.com/images/I/51%2BCkK0MUKL.jpg"
      imageWidth="400"
      productPrice={349}
    >
      ----------> Children are here
    </Product>
    <Product
      name="Ex Machina"
      imageUrl="https://images-na.ssl-images-amazon.com/images/I/51LnZI4zDaL.jpg"
      imageWidth="400"
      productPrice={29}
    />
    <Product
      name="Saban's Power Rangers 4K Ultra HD"
      imageUrl="https://images-na.ssl-images-amazon.com/images/I/61EfhxZpd6L.jpg"
      imageWidth="400"
      productPrice={89}
    />
    <TechList items={technologies} />
    <Panel title="Top VR games in the world - 2020">
      <ProductList items={products} />
      <p>Amaizing goods for best prices ever</p>
    </Panel>
  </Fragment>
);

export default App;
