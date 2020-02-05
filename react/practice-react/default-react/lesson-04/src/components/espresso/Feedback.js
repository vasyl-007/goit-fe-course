import React, { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = evt => {
    // event.persist();

    const name = evt.target.name;
    this.setState(prevState => {
      // return { good: prevState.good + 1 };
      return { [name]: prevState[name] + 1 };
    });
  };

  countPositiveFeedbackPercentage = () => {
    return;
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button" name="good" onClick={this.countTotalFeedback}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.countTotalFeedback}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.countTotalFeedback}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good {this.state.good}</p>
        <p>Neutral {this.state.neutral}</p>
        <p>Bad {this.state.bad}</p>
        <p>
          Positive feedback{" "}
          {Math.round(
            (this.state.good /
              (this.state.good + this.state.bad + this.state.neutral)) *
              100
          ) || 0}
          %
        </p>
      </>
    );
  }
}

export default Feedback;
