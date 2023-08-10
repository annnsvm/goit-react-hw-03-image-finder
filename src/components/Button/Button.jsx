import React from 'react';
import css from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <div>
      <button type="button" className={css.Button} onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default Button;
