import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import s from './feedback.module.scss';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  /*Не нужно обращаться к DOM если этого можно избежать. Не розумію що ти маєш на увазі*/
  onLeaveFeedback = event => {
    const name = event.currentTarget.name;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback() * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const showStatistics = good > 0 || neutral > 0 || bad > 0;
    return (
      <div className={s.feedbackWrapper}>
        <Section title={'Please Leave Feedback'}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={['Good', 'Neutral', 'Bad']} />
        </Section>

        <Section title={'Statistics'}>
          {
            showStatistics > 0
              ? <Statistics good={good} neutral={neutral} bad={bad} countTotalFeedback={this.countTotalFeedback}
                            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} />
              : <Notification message='There is no feedback' />
          }

        </Section>
      </div>
    );
  }
}

export default Feedback;
