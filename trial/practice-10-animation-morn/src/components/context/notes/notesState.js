import React, { Component } from "react";
import { NotesContext } from "./notesContext";

class NotesState extends Component {
  state = {
    notes: []
  };

  getNote = note => {
    this.setState(prev => ({
      notes: [...prev.notes, note]
    }));
  };

  render() {
    const { notes } = this.state;
    return (
      <NotesContext.Provider value={{ notes, getNote: this.getNote }}>
        {this.props.children}
      </NotesContext.Provider>
    );
  }
}

export default NotesState;
