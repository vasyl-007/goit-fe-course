import React, { Component } from "react";
import shortId from "short-id";
import { connect } from "react-redux";
import s from "./ContactForm.module.css";
import { addContact } from "../../redux/actions";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    const { name } = this.state;
    e.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: shortId.generate()
    };
    this.props.contacts.some(item => item.name.includes(name))
      ? alert(`${name} is already exists in contacts!`)
      : this.props.addContact(contact);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <h2>Number</h2>
          <input
            className={s.input}
            type="tel"
            name="number"
            placeholder="Enter Number"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapSTP = state => {
  return { contacts: state.contacts };
};

export default connect(mapSTP, { addContact })(ContactForm);
