import React, { Component } from "react";
import NotesContext from "./components/context/notes/notesContext";

class Form extends Component {
  state = {
    query: "",
    // notes: ""
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {};

  render() {
    return (

        <NotesContext>


        </NotesContext>
// {
//     value => {
//         return (
//                  <form onSubmit={this.handleSubmit}>
//         <input onChange={this.handleChange}></input>
//       </form>
//         )
//     }
// }
    );
  }


export default Form;
