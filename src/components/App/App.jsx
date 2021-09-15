import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import { Conteiner } from './App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = (this.state.good / this.countTotalFeedback()) * 100;
    return percentage.toFixed();
  };

  render() {
    const { good, bad, neutral } = this.state;
    const isShowStatistics = this.countTotalFeedback() > 0;
    const opltions = Object.keys(this.state);

    return (
      <Conteiner>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={opltions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {isShowStatistics && (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
          {!isShowStatistics && <Notification message="No feedback given" />}
        </Section>
      </Conteiner>
    );
  }
}
