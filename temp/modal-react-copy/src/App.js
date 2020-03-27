import React, { Component } from "react";
import Modal from "./components/Modal";

export default class App extends Component {
  state = { isOpen: false };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isOpen && (
          <Modal onClose={this.closeModal}>
            <h1>The heading of a Modal window</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ea
              sit recusandae illo necessitatibus sint natus rem odit. Ducimus
              nam iure odio similique sequi non quidem aliquam corporis quaerat
              impedit.Porro similique optio placeat officiis harum laboriosam
              alias veritatis distinctio architecto sapiente. Voluptates, ullam
              facere. Nemo nulla similique dignissimos blanditiis nam atque
              nesciunt non adipisci ut ratione, nobis aut in!
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
