import React, { Component, Fragment } from "react";
import { v4 as shortId } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  reset = () => {
    this.setState({
      name: "",
      number: ""
    });
  };
  
  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  submitData = e => {
    const { name } = this.state;
    e.preventDefault();
    console.log("name", name);
    this.props.contacts.some(item => item.name.includes(name))
      ? alert(`${name} is already exists in contacts!`)
      : this.addContact();
  };

  addContact = async e => {
    const { name, number } = this.state;
    const newContact = {
      id: shortId(),
      name,
      number
    };
    this.props.addContactToState(newContact);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.submitData}>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={name}
          />
          <h3>Number</h3>
          <input
            type="text"
            name="number"
            onChange={this.onChange}
            value={number}
          />
          <br />
          <button type="submit" onChange={this.submitData}>
            Add contact
          </button>
          <br />
        </form>
      </Fragment>
    );
  }
}

export default ContactForm;
