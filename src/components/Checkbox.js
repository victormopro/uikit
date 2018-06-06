import React from 'react';

const Checkbox = ({ label }) => (
  <div className="checkbox">
    <input type="checkbox" />
    <span></span>
    <label>{label}</label>
  </div>
);

export default Checkbox;
