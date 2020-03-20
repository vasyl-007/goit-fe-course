import React, { Component } from "react";
import { NotesContext } from "./notesContext";

const NotesState = ({ children }) => {
  const state = {
    // notes: []
  };

  const getNoteInfo = e => {
    e.preventFefault();
    const note = e.target.elements[0].value;
    this.setState(prevState => ({ notes: [...prevState.notes, { note }] }));
  };
  return (
    <NotesContext.Provider
      value={{
        // notes,
        getNoteInfo
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesState;
