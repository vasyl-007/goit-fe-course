/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { createRef, Component, Fragment } from "react";

const backdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const modal = css`
  padding: 12px 20px 24px 20px;
  max-width: 480px;
  width: 100%;
  min-height: 320px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class Modal extends Component {
  refBackdrop = createRef();

  escapeCloseModal = e => {
    if (e.code !== "Escape") {
      return;
    }
    this.props.onClose();
  };

  refCloseModal = e => {
    const { current } = this.refBackdrop;
    // console.log("this.refBackdrop", this.refBackdrop);
    // console.log("e", e);

    if (current && e.target !== current) return;
    this.props.onClose();
  };

  componentDidMount() {
    window.addEventListener("keydown", this.escapeCloseModal);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.escapeCloseModal);
  }

  render() {
    return (
      <Fragment>
        <div css={backdrop} ref={this.refBackdrop} onClick={this.refCloseModal}>
          <div css={modal}>
            {this.props.children}
            {/* <button>Close Modal</button> */}
          </div>
        </div>
      </Fragment>
    );
  }
}
