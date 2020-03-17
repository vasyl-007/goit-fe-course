import React, { Component } from "react";
// import styles from "./hocdrawermodule.css";
import styles from "./hocdrawer.module.css";

const withHigherOrderComponent = prevParam => WrappedComponent => {
    console.log('prevParam ----->', prevParam)
  return class WithHigherOrderComponent extends Component {
    state = {
      isOpen: false,
      firstName: "",
      lastName: "",
      age: ""
    };

    handleOpen = () => {
      this.setState(prev => ({
        isOpen: !prev.isOpen
      }));
    };

    handleSumbit = e => {
      e.preventDefault();
      console.log(this.state);
    };

    handleChangeValue = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    render() {
      const { isOpen } = this.state;
      console.log("this.props", this.props);
      return (
        <>
          <button onClick={this.handleOpen}>OPEN</button>
          <hr />
          {isOpen && (
            <div className={styles.container}>
              <WrappedComponent
                {...this.props}
                handleSumbit={this.handleSumbit}
                handleChangeValue={this.handleChangeValue}
              />
            </div>
          )}
        </>
      );
    }
  };
};

export default withHigherOrderComponent;
