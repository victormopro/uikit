import React from 'react';

const SectionContent = ({ children }) => (
  <div className="row mt-100">
    <div className="col-xs-offset-1 col-xs-11">
      <div className="section__content">{ children }</div>
    </div>
  </div>
);

export default SectionContent;
