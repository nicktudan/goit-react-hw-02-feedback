import { Component } from "react"
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleBtnClickFeedback = evt => {
    if (evt === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (evt === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (evt === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };


  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleBtnClickFeedback}
          />
        </Section>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad} />

      </div>
    );
  }
};
