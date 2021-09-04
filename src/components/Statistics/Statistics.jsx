import PropTypes from 'prop-types';
import { Feedback } from './Statistics.styled';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <Feedback>Good: {good}</Feedback>
      <Feedback>Neutral: {neutral}</Feedback>
      <Feedback>Bad: {bad}</Feedback>
      <Feedback>Total: {total}</Feedback>
      {bad > 0 && <Feedback>Positive Feedback: {positivePercentage}%</Feedback>}
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
