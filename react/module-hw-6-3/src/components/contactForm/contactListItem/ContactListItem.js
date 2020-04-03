import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../../redux/actions";
import s from "../ContactForm.module.css";

const ContactListItem = props => {
  return (
    <li className={s.contactCard}>
      <span>{props.contact.name} </span>
      <span>{props.contact.number}</span>
      <button
        className={s.contactButt}
        type="button"
        id={props.contact.id}
        onClick={() => props.deleteContact(props.contact.id)}
      >
        DELETE
      </button>
    </li>
  );
};

const mapDTP = {
  deleteContact
};

export default connect(null, mapDTP)(ContactListItem);
