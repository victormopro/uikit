import React from 'react';

const SectionTitle = ({ id, text, superscript }) => (
  <div id={id} className={`section__title ${superscript ? 'has-superscript' : ''}`}>
    <h1>{text}</h1>
    <span className="superscript">{superscript}</span>
  </div>
);

export default SectionTitle;
