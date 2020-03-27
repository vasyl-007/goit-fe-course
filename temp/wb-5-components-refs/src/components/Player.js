import React, { Component, Fragment, createRef } from "react";

export default class Player extends Component {
  playerRef = createRef();

  play = () => this.playerRef.current.play();

  pause = () => this.playerRef.current.pause();

  state = {};

  render() {
    console.log("this.player", this.player);
    return (
      <div>
        <video src={this.props.source} ref={this.playerRef} />
        <button label="PLAY" onClick={this.play}></button>
        <button label="PAUSE" onClick={this.pause}></button>
      </div>
    );
  }
}

// const Player = source => (
//   <Fragment>
//     <div>some text</div>
//     {/* <iframe
//       width="640"
//       height="360"
//       // src="https://www.youtube.com/embed/cHwcOAErdwQ"
//       src={source}
//       frameborder="0"
//       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//       allowfullscreen
//     >
//       Truck is awesome!
//     </iframe> */}
//   </Fragment>
// );

// export default Player;
