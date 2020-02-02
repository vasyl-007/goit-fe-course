import React from "react";
// import ReactDOM from "react-dom";
// import Product from "./Product";
import Panel from "./Panel";
import ProfileDetails from "./ProfileDetails";
import Mailbox from "./Mailbox";
import Dropdown from "./Dropdown";
import TechList from "./TechList";
import ProductList from "./ProductList";
import products from "../products.json";

const technologies = [
  { id: "id-1", name: "JS" },
  { id: "id-2", name: "React" },
  { id: "id-3", name: "React Router" },
  { id: "id-4", name: "Redux" }
];

// const products = [
//   {
//     id: "id-1",
//     name: "Tacos With Lime",
//     imgUrl: "https://picsum.photos/seed/picsum/200/300",
//     alt: "Tacos With Lime",
//     price: 10
//   },
//   {
//     id: "id-2",
//     name: "Working day",
//     imgUrl: "https://picsum.photos/200/300?grayscale",
//     alt: "Working day",
//     price: 20
//   }
// ];
const App = () => (
  <div>
    <TechList items={technologies} />

    <Dropdown isOpen={true} />
    {/* <Dropdown isOpen="true" /> */}

    <Mailbox unreadMessages={[1, 2, 3, 4, 5]} />

    <Panel title="Some title">
      <ProfileDetails name="Mango" email="mango@mail.com" />
    </Panel>

    <Panel title="Top products">
      <ProductList items={products} />
    </Panel>

    {/* <Product
      name="Tacos With Lime"
      //   name={[]} // check for PropTypes
      imgUrl="https://picsum.photos/200/300?grayscale"
      width="300"
      alt="Tacos with Lime"
      price={10}
      //   price=10 // check for PropTypes
    >
      demonstrate of children
    </Product>
    <Product
      name="Working day"
      imgUrl="https://picsum.photos/seed/picsum/200/300"
      width="300"
      alt="Working day"
      price={20}
    /> */}
  </div>
);

export default App;
