import React, { Component, Fragment } from "react";
import Statistics from "./components/statistics/Statistics";
import FeedbackOptions from "./components/feedback/FeedbackOptions";
import Section from "./components/section/Section";
import Notification from "./components/notification/Notification";

export default class App extends Component {
  constructor() {
    super();
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage.bind(
      this
    );
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  leaveFeedback = evt => {
    const feedback = evt.target.name;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    if (this.state.good + this.state.neutral + this.state.bad === 0) {
      return 0;
    } else {
      return Math.round(
        (this.state.good * 100) /
          (this.state.good + this.state.neutral + this.state.bad)
      );
    }
  }

  render() {
    console.log("this.state ------------->", this.state);
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Fragment>
        <h3>IT WORKS</h3>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ positive: "good", normal: "neutral", negative: "bad" }}
            onLeaveFeedback={this.leaveFeedback}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        <br />
        <Notification total={total} message="No feedback given" />
      </Fragment>
    );
  }
}
