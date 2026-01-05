import React from "react";
import { linksInsta } from "./dataLinksInsta"; // importa os links das regiões

const LinksInsta = () => {
  return (
    <div className="linksInsta">
      {linksInsta.map((link, index) => (
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

export default LinksInsta;