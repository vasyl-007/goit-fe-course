import React, { Component, Fragment } from "react";
import Statistics from "./components/statistics/Statistics";
import FeedbackOptions from "./components/feedback/FeedbackOptions";
import Section from "./components/section/Section";
import Notification from "./components/notification/Notification";
// import PropTypes from "prop-types";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  // countTotalFeedback = () => {() => {
  //   this.state.good + this.state.neutral + this.state.bad;
  //   console.log('result', countTotalFeedback())
  // };
  // countPositiveFeedbackPercentage = () => {};
  // positivePercentage = () => {
  //   return (
  //     (this.state.good * 100) /
  //     (this.state.good + this.state.neutral + this.state.bad)
  //   )
  // };

  render() {
    // const { good } = this.state;
    //     const { neutral } = this.state;
    //     const { bad } = this.state;
    return (
      <Fragment>
        <h3>IT WORKS</h3>
        <Section title="Please leave feedback">
          <FeedbackOptions options={1} onLeaveFeedback={2} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={10}
            positivePercentage={this.positivePercentage}
          />
        </Section>
        <br />
        <Notification message="No feedback given" />
      </Fragment>
    );
  }
}

export default App;
