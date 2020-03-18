import React from "react";
// import Reader from "./Reader";
import withReaderContext from "./withReaderContext";

const Controls = ({ onNext, onPrev }) => (
  <section className="controls">
    <button className="button" onClick={onPrev}>
      Назад
    </button>
    <button className="button" onClick={onNext}>
      Вперед
    </button>
  </section>
);

// const Controls = ({ onNext, onPrev }) => (
//   <Reader.Consumer>
//     {context => (
//       <section className="controls">
//         <button className="button" onClick={context.onPrev}>
//           Назад
//         </button>
//         <button className="button" onClick={context.onNext}>
//           Вперед
//         </button>
//       </section>
//     )}
//   </Reader.Consumer>
// );

export default withReaderContext(Controls);
