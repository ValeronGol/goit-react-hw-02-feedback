import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import shortid from 'shortid';

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
            {option[0].toUpperCase() +
              option
                .split('')
                .splice(1, option.length - 1)
                .join('')}
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
