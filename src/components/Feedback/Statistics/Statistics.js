import React from 'react';
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage}) => {

  return (
    <div>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {countTotalFeedback()}</div>
      <div>Positive feedback: {countPositiveFeedbackPercentage()}%</div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
