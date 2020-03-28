import React, { createRef, Component, Fragment } from "react";
import { v4 as uuId } from "uuid";

const listStyles = {
  height: 380,
  border: "2px solid rgb(16, 69, 71)",
  overflow: "auto",
  backgroundColor: "rgba(191, 215, 213, 0.75)"
};

export default class MessageFeed extends Component {
  listRef = createRef();

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.items !== this.props.items) {
      const { scrollTop, scrollHeight, offsetHeight } = this.listRef.current;
      // scrollHeight - полная высота контента, включая невидимый;
      // scrollTop - высота невидимого контента;
      // offsetHeight - высота элемента (коммента)
      const distanceFromBottom = scrollHeight - (scrollTop + offsetHeight);
      return { shouldScroll: distanceFromBottom < 10 };
    }
    return null;
  }

  //   getBoundingClientRect(){}

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate snapshot", snapshot);
    if (snapshot && snapshot.shouldScroll) {
      const listRef = this.listRef.current;
      listRef.scrollTop = listRef.scrollHeight;
    }
    // if (prevProps.items !== this.props.items) {
    //   console.log("this.listRef", this.listRef);
    // }
  }

  render() {
    return (
      <Fragment>
        <div>Message Feed Component</div>
        <ul style={listStyles} ref={this.listRef}>
          {this.props.items.map(item => (
            <li key={uuId()}>
              <p>{item.text}</p>
              <p>
                Created at: <i>{new Date(item.createdAt).toLocaleString()}</i>
              </p>
              <hr />
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
