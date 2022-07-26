import React from 'react';
import PropTypes from 'prop-types';
import s from '../feedback.module.scss';

function FeedbackOptions({onLeaveFeedback, options}) {
  return (
    <div className={s.buttons}>
      {
        options.map(opt => <button key={String(opt)} onClick={onLeaveFeedback} name={String(opt).toLowerCase()}>{opt}</button>)
      }
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
