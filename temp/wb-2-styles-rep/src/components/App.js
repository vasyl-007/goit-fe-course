import React from "react";
import ProductList from "./ProductList";
import Panel from "./Panel";
import ProfileDetails from "./ProfileDetails";
import Mailbox from "./Mailbox";
import Dropdown from "./dropdown/Dropdown";
import TechList from "./TechList";
import Button from "./Button";
import NewButton from "./button/NewButton";
import NewDropdown from "./dropdown/NewDropdown";
import products from "../products.json";

const technologies = [
  { id: "id-1", name: "JS" },
  { id: "id-2", name: "React" },
  { id: "id-3", name: "React Router" },
  { id: "id-4", name: "Redux" }
];

const App = () => (
  <div>
    <Button
      label="Hi, click me !"
      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
      // disabled
    />

    <TechList items={technologies} />

    <Dropdown isOpen={true} />

    <Mailbox unreadMessages={[1, 2, 3]} />

    <Panel title="Some title">
      <ProfileDetails name="Mango" email="mango@mail.com" />
    </Panel>

    <Panel title="Top Products">
      <ProductList items={products} />
    </Panel>
    <NewDropdown />
    <NewButton
      label="Hi! I'm NewButton, click on me !"
      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
      disabled
    />
    <hr />
  </div>
);

export default App;
