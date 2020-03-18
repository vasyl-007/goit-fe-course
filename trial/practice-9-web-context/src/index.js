import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import publications from "./publications.json";
import App from "./App";
import Reader from "./components/Reader";
import Publication from "./components/Publication";
import Controls from "./components/Controls";
import Counter from "./components/Counter";
import ProgressBar from "./components/ProgressBar";

// const ReaderContext = createContext();

// class Reader extends React.Component {
//   // static Consumer = ReactContext.Consumer;

//   // state = {
//   //   currentIdx: 0,
//   //   publication: this.props.items[0],
//   //   totalPublications: this.props.items.length
//   // };

//   // handleNext = () => {
//   //   console.log("Next");
//   //   this.setState(state => ({
//   //     currentIdx: state.currentIdx + 1,
//   //     publication: this.props.items[state.currentIdx + 1]
//   //   }));
//   // };

//   // handlePrev = () => {
//   //   console.log("Prev");
//   //   this.setState(state => ({
//   //     currentIdx: state.currentIdx - 1,
//   //     publication: this.props.items[state.currentIdx - 1]
//   //   }));
//   // };

//   render() {
//     return (
//       <h3 className="reader">Some text</h3>
//       //   <div>
//       //     <Publication />
//       //     <Counter />
//       //     <Controls />
//       //   </div>
//       // <ReaderContext.Provider
//       //   value={{
//       //     ...this.state,
//       //     onNext: this.handleNext,
//       //     onPrev: this.handlePrev
//       //   }}
//       // >
//       //   <div className="reader">{this.props.children}</div>
//       // </ReaderContext.Provider>
//     );
//   }
// }

// const withReaderContext = BaseComponent => props => (
//   <Reader.Consumer>
//     {context => <BaseComponent {...props} {...context} />}
//   </Reader.Consumer>
// );

// const Counter = ({ totalPublications, currentIdx }) => (
//   <p>
//     {currentIdx + 1}/{totalPublications}
//   </p>
// );

// const Publication = ({ publication }) => (
//   <article className="publication">
//     <h2>{publication.title.slice(0, 20)}...</h2>
//     <p>{publication.text.slice(0, 300)}...</p>
//   </article>
// );

// const Controls = ({ onNext, onPrev }) => (
//   <section className="controls">
//     <button className="button" onClick={onPrev}>
//       Назад
//     </button>
//     <button className="button" onClick={onNext}>
//       Вперед
//     </button>
//   </section>
// );

// const PublicationWithContext = withReaderContext(Publication);
// const ControlsWithContext = withReaderContext(Controls);
// const CunterWithContext = withReaderContext(Counter);

ReactDOM.render(
  <Reader items={publications}>
    <Publication />
    <Controls />
    <Counter />
    <ProgressBar />
    <h3>Delicious food ...</h3>
    {/* <PublicationWithContext />
    <CunterWithContext />
    <ControlsWithContext /> */}
  </Reader>,
  document.getElementById("root")
);
