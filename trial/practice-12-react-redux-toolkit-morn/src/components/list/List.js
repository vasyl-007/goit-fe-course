import React from "react";
import styles from "./list.module.css";
import { connect } from "react-redux";
import ListItem from "../listItems/ListItem";

//принимает notes и перебирает
const List = props => (
  <div className={styles.notesContainer}>
    {props.notes.map(note => (
      <ListItem data={note} key={note.id}/>
    ))}
  </div>
);

const mapSTP = state => {
  console.log("state", state);
  return {
    notes: state.notes
  };
};
export default connect(mapSTP, null)(List);
