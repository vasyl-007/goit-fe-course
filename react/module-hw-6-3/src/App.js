import React, { Component } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import s from "./App.module.css";
import phonebook from "./transition/phonebook.module.css";

class App extends Component {
  state = {
    filter: "",
    inUp: false
  };

  getName = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.props.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <div className={s.container}>
        <CSSTransition
          in={this.state.inUp}
          timeout={1500}
          classNames={phonebook}
        >
          <h2 className={s.logo}>Phonebook</h2>
        </CSSTransition>
        <ContactForm submitContact={this.submitContact} />
        <h2>Contacts</h2>
        <Filter getName={this.getName} value={this.state.filter} />
        {this.state.filter === "" ? (
          <ContactList contacts={this.props.contacts} />
        ) : (
          <ContactList contacts={this.filterContacts()} />
        )}
      </div>
    );
  }
}

const mapSTP = state => {
  return {
    contacts: state.contacts
  };
};

export default connect(mapSTP)(App);
