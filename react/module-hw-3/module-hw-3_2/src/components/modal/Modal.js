import React, { createRef, Component, Fragment } from "react";
import s from "./Modal.module.css";


export default class Modal extends Component {
  refBackdrop = createRef();

  escapeCloseModal = e => {
    if (e.code !== "Escape") {
      return;
    }
    this.props.handleCloseModal();
  };

  refCloseModal = e => {
    const { current } = this.refBackdrop;
    if (current && e.target !== current) return;
    this.props.handleCloseModal();
  };

  componentDidMount() {
    window.addEventListener("keydown", this.escapeCloseModal);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.escapeCloseModal);
  }

  render() {
    const { largeImg, alt } = this.props;
    return (
      <Fragment>
        <div
          ref={this.refBackdrop}
          onClick={this.refCloseModal}
          className={s.overlay}
        >
          <div className={s.modal}>
            <img src={largeImg} alt={alt} />
          </div>
        </div>
      </Fragment>
    );
  }
}
