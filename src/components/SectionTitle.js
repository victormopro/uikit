import React from 'react';

const SectionTitle = ({ text, superscript }) => (
  <div className={`section__title ${superscript ? 'has-superscript' : ''}`}>
    <h1>{text}</h1>
    <span className="superscript">{superscript}</span>
  </div>
);

export default SectionTitle;
