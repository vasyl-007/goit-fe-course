import React, { Component, createContext } from "react";
import Form from "../form/Form";
import List from "../list/List";
import { DefaultContext } from "../../App";

export const NotesContext = createContext();

class Notes extends Component {
  state = {
    notes: []
  };

  getNoteInfo = note => {
    console.log(note);
    this.setState(prevState => ({
      notes: [...prevState.notes, note]
    }));
    // принимает note и пушит в массив notes
  };

  render() {
    console.log("re-re-nder");
    const { notes } = this.state;
    return (
      <DefaultContext.Consumer>
        {defContext => {
          console.log("defContext", defContext);
          return (
            <NotesContext.Provider
              value={{
                // theme: "dark",
                notes,
                handleSubmit: this.getNoteInfo,
                theme: defContext.theme
              }}
            >
              <Form onGetNoteInfo={this.getNoteInfo} />
              <List />
            </NotesContext.Provider>
          );
        }}
      </DefaultContext.Consumer>
    );
  }
}

export default Notes;
