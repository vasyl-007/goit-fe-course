import types from "./types";

export const addNotes = note => ({
  type: types.ADD_NOTE,
  payload: note
});

export const deleteNote = id => ({
  type: types.DELETE_NOTE,
  payload: id
});


