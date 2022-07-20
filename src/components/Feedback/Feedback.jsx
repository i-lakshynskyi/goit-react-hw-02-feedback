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

  onLeaveFeedback = event => {
    this.setState({ [event.target.name]: this.state[event.target.name] + 1 });
  };

  render() {
    const { good, neutral, bad} = this.state;
    const showStatistics = good > 0 || neutral > 0 || bad > 0;
    return (
      <div className={s.feedbackWrapper}>
        <Section title={'Please Leave Feedback'}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={['Good', 'Neutral', 'Bad']}/>
        </Section>

        <Section title={'Statistics'}>
          {
            showStatistics > 0
              ? <Statistics good={good} neutral={neutral} bad={bad}/>
              : <Notification message="There is no feedback"/>
          }

        </Section>
      </div>
    );
  }
}

export default Feedback;
