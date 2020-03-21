import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Dropdown extends Component {
  // state = {
  //   isOpen: false
  // };

  static defaultProps = {
    isOpen: false
  };

  static propTypes = {
    isOpen: PropTypes.bool
  };

  // changeToggle = () => {
  //   this.setState(prev => ({ isOpen: !prev.isOpen }));
  // };

  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };
  // handleToggle = () => {
  //   this.setState(prevState => {
  //     return {
  //       isOpen: !prevState.isOpen
  //     };
  //   });
  // };

  render() {
    const { isOpen } = this.state;
    // console.log('this.state from Dropdown ---------->', this.state)
    // console.log('this.props from Dropdown ---------->', this.props)
    return (
      <div className="container">
        <button
          type="button"
          className="button"
          // onClick={e => {
          //   console.log("e: test ----->", e);
          //   console.log('e.target -----> ', e.target)
          // }}
          // onClick={this.changeToggle}
          onClick={this.handleToggle}
        >
          &#9776;
        </button>

        {/* <button type="button" onClick={this.handleOpen}>
          Open
        </button>
        <button type="button" onClick={this.handleClose}>
          Close
        </button> */}

        {isOpen && (
          <div className="dropdown">
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>React native</li>
              <li>Electron</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
