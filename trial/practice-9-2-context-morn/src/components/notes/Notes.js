import React, { Component, createContext } from "react";
import Form from "../form/Form";
import List from "../list/List";

const NotesContext = createContext();

class Notes extends Component {
  state = {
    notes: ""
  };

  getNoteInfo = note => {
    // принимает note и пушит в массив notes
  };

  render() {
    return (
      <>
        <NotesContext.Provider
          value={{
            theme: "dark"
          }}
        >
          {/* <Form onGetNoteInfo={this.getNoteInfo} /> */}
          <Form onGetNoteInfo={this.getNoteInfo} />
          <List />
        </NotesContext.Provider>
      </>
    );
  }
}

export default Notes;
