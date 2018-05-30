import React from 'react';
import 'prismjs';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';

const CodePreview = ({ children }) => {
  return(
    <div className="code-preview">
      <PrismCode component="pre" className="language-markup">
        { children.trim() }
      </PrismCode>
    </div>
  );
}

export default CodePreview;
