import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./app.module.css";
import NotesState from "./components/context/notes/notesState";
import Form from "./components/Form";
import AnimationNotesList from "./components/AnimationNotesList";


const App = () => (
  <NotesState>
    <Form />
  </NotesState>
);

export default App;


// class App extends Component {
//   state = {
//     isOpen: false
//   };

//   handleOpen = () => {
//     this.setState(prev => ({
//       isOpen: !prev.isOpen
//     }));
//   };

//   render() {
//     const { isOpen } = this.state;
//     return (
//       <Fragment>
//         <NotesState>
//           <Form />
//         </NotesState>
//       </Fragment>
//     );
//   }
// }

// export default App;
