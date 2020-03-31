import React, { Component, Fragment } from "react";

import ContactList from "./components/contacts/ContactList";

class App extends Component {
  state = {
    contacts: [],
    name: ""
  };
  render() {
    return (
      <Fragment>
        <ContactList />
      </Fragment>
    );
  }
}

export default App;
