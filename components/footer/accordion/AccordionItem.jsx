import React, { useState } from 'react';
import './accordion.css';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordionPai' >
      <button className='accordion-button'
        onClick={toggleAccordion}
        aria-expanded={isOpen}
       
      >
        {title}
      </button>
      {isOpen && (
        <div className='accordionFilho' >
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
