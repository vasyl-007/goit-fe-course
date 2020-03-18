import React, { Component, createContext } from "react";

const ReaderContext = createContext();

export default class Reader extends Component {
  static Consumer = ReaderContext.Consumer;

  state = {
    currentIdx: 0,
    publication: this.props.items[0],
    totalPublications: this.props.items.length
  };

  handlePrev = () => {
    console.log("Prev");
    this.setState(state => ({
      currentIdx: state.currentIdx - 1,
      publication: this.props.items[state.currentIdx - 1]
    }));
  };

  handleNext = () => {
    console.log("Next");
    this.setState(state => ({
      currentIdx: state.currentIdx + 1,
      publication: this.props.items[state.currentIdx + 1]
    }));
  };

  render() {
    return (
      <ReaderContext.Provider
        value={{
          ...this.state,
          onPrev: this.handlePrev,
          onNext: this.handleNext
        }}
      >
        <div className="reader">{this.props.children}</div>
      </ReaderContext.Provider>
    );
  }
}
