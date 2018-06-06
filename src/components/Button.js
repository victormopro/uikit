import React from 'react';

const Button = ({ size, type, block, children }) => {
  const btnClasses = ['btn'];

  // Button sizes

  if (size === 'small') {
    btnClasses.push('btn-sm');
  } else if (size === 'large') {
    btnClasses.push('btn-lg');
  }

  // Button types

  btnClasses.push(`btn--${type}`);

  // Button width

  if (block) {
    btnClasses.push('btn-block');
  }

  return (
    <div className={btnClasses.join(' ')}>{ children }</div>
  );
}

export default Button;
