import React, { Component } from "react";
import { v4 as shortId } from "uuid";

class ContactList extends Component {
  state = {
    filter: [],
    name: "",
    number: "",
    searchValue: ""
  };

  onSearchValue = e => {
    const name = e.target.name;
    // console.log('name ------------>', name);
    // console.log("name ------------>", e.target.name);
    this.setState({
      [name]: e.target.value
    });
    console.log("this.state.filter", this.state.filter);
  };
  onChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  addContact = async e => {
    const newContact = {
      id: shortId(),
      name: this.state.name,
      number: this.state.number
    };
    await this.setState({ filter: [newContact, ...this.state.filter] });
    localStorage.setItem("filter", JSON.stringify(this.state.filter));
  };

  filterContacts() {
    return this.state.filter.filter(elem =>
      elem.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );
  }

  submitData = e => {
    e.preventDefault();
    console.log("this.state.name", this.state.name);
    this.state.filter.some(item => item.name.includes(this.state.name))
      ? alert("Такой контанкт уже существует!")
      : this.addContact();
  };

  handleDelete = async e => {
    console.log("e.target ----------->", e.target);
    const id = e.target.id;
    console.log("id", id);
    await this.setState({
      filter: [...this.state.filter.filter(elem => elem.id !== id)]
    });
    localStorage.setItem("filter", JSON.stringify(this.state.filter));
  };
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.submitData}>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
          />
          <h3>Number</h3>
          <input
            type="text"
            name="number"
            onChange={this.onChange}
            value={this.state.number}
          />
          <br />
          <button type="submit" onChange={this.addContact}>
            Add contact
          </button>
          <br />
        </form>
        <h3>All Contacts</h3>
        <ul>
          {this.filterContacts().map(item => (
            <li key={item.id}>
              {item.name}, {item.number}
            </li>
          ))}
        </ul>

        <h3>Find contact by name</h3>
        <input
          type="text"
          onChange={this.onSearchValue}
          name="searchValue"
          value={this.state.searchValue}
        ></input>
        <ul>
          {this.filterContacts().map(item => (
            <li key={item.id}>
              {item.name}, {item.number}
              <button id={item.id} type="button" onClick={this.handleDelete}>
                Delete contact
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ContactList;
