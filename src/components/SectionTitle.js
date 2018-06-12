import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -120 });

const SectionTitle = ({ id, text, superscript }) => (
  <ScrollableAnchor id={id}>
    <div className={`section__title ${superscript ? 'has-superscript' : ''}`}>
      <h1>{text}</h1>
      <span className="superscript">{superscript}</span>
    </div>
  </ScrollableAnchor>
);

export default SectionTitle;
