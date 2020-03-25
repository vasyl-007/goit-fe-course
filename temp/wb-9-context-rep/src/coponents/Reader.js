import React, { Component, createContext, useContext, Fragment } from "react";
import publications from "../publications.json";

const ReaderContext = createContext();

class Reader extends Component {
  static Consumer = ReaderContext.Consumer;
  state = {
    currentIdx: 0,
    publication: this.props.items[0],
    totalPublications: this.props.items.length
  };

  handleNext = () => {
    this.setState(prev => ({
      currentIdx: prev.currentIdx + 1,
      publication: this.props.items[this.currentIdx + 1]
    }));
  };
  handlePrev = () => {
    this.setState(prev => ({
      currentIdx: prev.currentIdx - 1,
      publication: this.props.items[this.currentIdx - 1]
    }));
  };

  render() {
    return (
      <Fragment>
        <ReaderContext.Provider
          value={{
            ...this.state,
            onNext: this.handleNext,
            onPrev: this.handlePrev
          }}
        >
          <div>{this.props.children}</div>
        </ReaderContext.Provider>
      </Fragment>
    );
  }
}

const withReaderContext = BaseComponent => props => (
  <Reader.Consumer>
    {context => <BaseComponent {...props} {...context} />}
  </Reader.Consumer>
);

const Counter = ({ totalPublications, currentIdx }) => (
  <p>
    {currentIdx + 1} / {totalPublications}
  </p>
);

const Publication = ({ publication }) => (
  <article>
    <h3>{publication}</h3>
    <p>{publication}</p>
  </article>
);

const Controls = ({ onNext, onPrev }) => (
  <section>
    <button type="button" onClick={onPrev}>
      Prev
    </button>
    <button type="button" onClick={onNext}>
      Next
    </button>
  </section>
);

export const PublicationWithContext = withReaderContext(Publication);
export const ControlsWithContext = withReaderContext(Controls);
export const CounterWithContext = withReaderContext(Counter);

export default Reader;
