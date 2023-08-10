import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => {
  return (
    <div>
      <button type="button" className={css.Button} onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
};

Button.prototype = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
