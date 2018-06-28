import React from 'react';

const InputField = ({ size, icon }) => {
  const inputClasses = ['input-field'];
  let iconName = '';

  if (size === 'large') {
    inputClasses.push('input-lg');
  }

  if (icon) {
    inputClasses.push('has-icon');
    iconName = icon[0].toUpperCase() + icon.substr(1);
  }

  return (
    <div className={inputClasses.join(' ')}>
      <input type="text" placeholder="Search" />
      { icon && <i className={`input__icon gradient-text icon-${iconName}`} /> }
    </div>
  );
}

export default InputField;
