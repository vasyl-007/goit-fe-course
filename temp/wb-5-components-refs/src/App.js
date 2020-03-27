import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import Player from "./components/Home";
import Modal from "./components/Modal";

export default class App extends Component {
  state = { isOpen: false };

  openModal = e => {
    this.setState({ isOpen: true });
  };

  closeModal = e => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isOpen && (
          <Modal onClose={this.closeModal}>
            <h2>Modal Content</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              necessitatibus velit quaerat quia. Voluptatum dolor explicabo,
              deleniti, aliquid accusantium necessitatibus incidunt
              exercitationem, ea natus asperiores animi beatae voluptatibus
              temporibus. Recusandae.Vero modi tenetur quis non veniam,
              provident beatae voluptatibus corporis eveniet reiciendis nesciunt
              repellat magnam possimus voluptas, fugit maiores. Maiores amet
              aliquid temporibus dolor voluptatum id debitis? Ipsam, dolor vero?
            </p>
            <button type="button" onClick={this.closeModal}>
              Close Modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

// function App() {
//   return (
//     <Fragment>
//       <h4>IT WORKS</h4>
//       <Player source="http://techslides.com/demos/sample-videos/small.mp4" />
//       {/* <Home /> */}
//       {/* <Player source="https://www.youtube.com/embed/cHwcOAErdwQ" /> */}
//     </Fragment>
//   );
// }

// export default App;
