import React from 'react';

const ActionButton = ({ type, children }) => {
  return (
    <div className={`action-btn action-btn-${type}`}>
      { children }
    </div>
  );
}

export default ActionButton;
