import React from 'react';

const Accordion = ({ title, description }) => {
  return (
    <div className="accordion">
        <div className="accordion__title">
            <h4 className="">{title}</h4>
        </div>
        <div className="accordion_description">
            <p>{description}</p>
        </div>
    </div>
  ); 
}

export default Accordion;
