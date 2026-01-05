import React from "react";
import LinksFooter from "./LinksFooter";
import LinksFooterPortais from "./LinksFooterPortais";
import { Link } from "react-router-dom";
import Accordion from "./accordion/Accordion";
import "./footer.css";
import LinksFooterFace from "./LinksFace";
import LinksInsta from "./LinksInsta";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="containerFooter">
          {/* EN Regiões - Esquerda */}
          {/* <div className="linksRegioes">
            <h1>
              <i className="fa-solid fa-caret-down"></i> PORTAIS
            </h1>
            <Accordion/>
            <LinksFooterPortais/>
          </div>
          <div className="gpFace" >
            <h1>
                <i className="fa-solid fa-caret-down"></i> FACEBOOK
            </h1>
            
            <LinksFooterFace />
          </div>
          <div className="gpInsta" >
            <h1>
                <i className="fa-solid fa-caret-down"></i> INSTAGRAM
            </h1>
            
            <LinksInsta />
          </div> */}
          <div className="sobreNos" >
            <h1>
                <i className="fa-solid fa-caret-down"></i> SOBRE NÓS
            </h1>
            <div className="sobreNosLinks">
      <i className="fa-solid fa-chevron-right icon "></i> <Link to="/institucional" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>Institucional</Link>
      <i className="fa-solid fa-chevron-right  icon"></i> <Link to="/politica-de-privacidade" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>Política de Privacidade</Link>
      <i className="fa-solid fa-chevron-right  icon"></i> <Link to="/termos-de-uso" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>Termos de Uso</Link>
      <i className="fa-solid fa-chevron-right icon"></i> <Link to="/contato" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>Contato</Link>
      <i className="fa-solid fa-chevron-right icon"></i> <Link to="/anuncie" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>Anuncie</Link>
       {/* <i className="fa-solid fa-chevron-right icon"></i> <Link to="/anuncie">Expediente</Link>
       <p>SEGUNDA</p> */}
            </div>
            <div className="expediente">
              <h4>EXPEDIENTE</h4>
              <p>Segunda a Sexta</p>
              <p>9h às 18h</p>
            </div>

          </div>
          {/* Logo e Texto - Direita */}
        </div>
      
          <a id="botaoHome" href="#topo" className="botaoHome" ><img src="/images/CRISTÃO PARÁ - LOGO BRANCA.png" alt=""></img></a>
      </footer>

      <div className="legal">
        <div
          className="footer-content"
          style={{ flexDirection: "column", width: "100%" }}
        >
          <div className="footer-links">
            <div className="logoFooter">
             <a href="/"><img src="./../images/CRISTÃO PARÁ - LOGO BRANCA.png" alt="Logo" /></a>
          
            </div>
            <div className="buttons">
            <button><Link to="/anuncie">Anuncie</Link></button>
            <button><Link to="/contato">Contato</Link></button>
            </div>
          </div>
          <div className="copyright">
          <p >© 2025 - Todos os direitos reservados para É Notícia Pará</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
