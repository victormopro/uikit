import React from 'react';

const Radio = ({ name, label }) => (
  <div className="radio">
    <input type="radio" name="name" />
    <span></span>
    <label>{label}</label>
  </div>
);

export default Radio;
