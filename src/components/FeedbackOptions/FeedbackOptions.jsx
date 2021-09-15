import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Button } from './FeedbackOptions.styled';

export default class FeedbackOptions extends Component {
  feedbackAdd = event => {
    this.props.onLeaveFeedback(event.target.getAttribute('name'));
  };

  render() {
    const { options } = this.props;
    return (
      <>
        {options.map(option => (
          <Button
            type="button"
            name={option}
            onClick={this.feedbackAdd}
            key={shortid.generate()}
          >
            {option}
          </Button>
        ))}
      </>
    );
  }
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
