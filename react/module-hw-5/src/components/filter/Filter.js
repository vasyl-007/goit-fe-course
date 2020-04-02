import React, { Component, Fragment } from "react";

class Filter extends Component {
  state = {
    searchName: ""
  };

  onSearchName = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
    console.log("this.state.contacts", this.state.contacts);
  };

  filterContacts() {
    return this.props.contacts.filter(elem =>
      elem.name.toLowerCase().includes(this.state.searchName.toLowerCase())
    );
  }

  handleDelete = async e => {
    console.log("e.target ----------->", e.target);
    const id = e.target.id;
    console.log("id", id);
    await this.props.removeContactFromState(id);
  };

  render() {
    const { searchName } = this.state;
    return (
      <Fragment>
        <h3>Find contact by name</h3>
        <input
          type="text"
          name="searchName"
          value={searchName}
          onChange={this.onSearchName}
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
      </Fragment>
    );
  }
}

export default Filter;
