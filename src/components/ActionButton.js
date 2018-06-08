import React from 'react';

const ActionButton = ({ type, children }) => {
  return (
    <button className={`action-btn action-btn--${type}`}>{ children }</button>
  );
}

export default ActionButton;
