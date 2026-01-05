import React from 'react';
import AccordionItem from './AccordionItem';
import './accordion.css';
import LinksFooterFace from '../LinksFace';
import LinksFooter from '../LinksFooter';
import LinksInsta from '../LinksInsta';
import PoliticaPrivacidade from '../../../views/politicas/PoliticaPrivacidade';
import { Link } from 'react-router-dom';

const Accordion = () => {
  return (
    <div className='accordion'>
      <AccordionItem title="PORTAIS">
          <LinksFooter/>
      </AccordionItem>
      
      <AccordionItem title="FACEBOOK">
        <LinksFooterFace />
      </AccordionItem>
      <AccordionItem title="INSTAGRAM">
        <LinksInsta />
      </AccordionItem>
      <AccordionItem title="SOBRE NÓS">
        <div className='itemAccordion' ><i className="fa-solid fa-chevron-right  icon "></i> <Link to="/politica-de-privacidade">Política de Privacidade</Link></div>
    <div className='itemAccordion'><i className="fa-solid fa-chevron-right  icon"></i> <Link to="/termos-de-uso">Termos de Uso</Link></div>
     <div className='itemAccordion'> <i className="fa-solid fa-chevron-right icon "></i> <Link to="/institucional">Institucional</Link></div>      
          <div className='itemAccordion'><i className="fa-solid fa-chevron-right icon"></i> <Link to="/contato">Contato</Link></div>
           <div className='itemAccordion'><i className="fa-solid fa-chevron-right icon"></i> <Link to="/anuncie">Anuncie</Link></div>

      </AccordionItem>
    </div>
  );}

export default Accordion;