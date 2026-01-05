import React from "react";
import { linksPortal } from "./dataLinks";


const LinksFooter = () => {
  return (
    <div className="linksEns" id="flexLinksPortal1" >
      {linksPortal.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-chevron-right"></i> {link.name}
        </a>
      ))}
    </div>
  );
};

export default LinksFooter;
