import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from "./Notification";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
 
  countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    const values = Object.values(this.state);
    return values.reduce((total, value) => total + value, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good} = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Section title="Leave Feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
