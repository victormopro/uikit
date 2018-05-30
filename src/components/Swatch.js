import React from 'react';

const Swatch = ({ marginTop, colorClass, headerText, colors }) => (
  <div className={`swatch mt-${marginTop}`}>
    <div className={`swatch__color ${colorClass}`}></div>
    <div className="swatch__body">
      <h5>{headerText}</h5>
      <p className="color-medium fw-medium">{ colors.join(' - ') }</p>
    </div>
  </div>
);

export default Swatch;
