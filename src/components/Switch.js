import React from 'react';

const Switch = ({ type }) => {
  const switchClasses = ['switch'];

  if (type === 'success') {
    switchClasses.push('switch--success');
  } else if (type === 'text') {
    switchClasses.push('switch--text');
  }

  return (
    <div className={switchClasses.join(' ')}>
      <label>
        <input type="checkbox" />
        <span className="lever">
          {
            type === 'text' ?
            <span className="switch__text"></span> :
            null
          }
        </span>
      </label>
    </div>
  );
}

export default Switch;
