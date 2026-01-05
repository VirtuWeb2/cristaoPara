// // LinksFooterRegioes.jsx
// import React from "react";
// import { links } from "./dataLinksReg"; // importa os links das regiões

// const LinksFooterPortais = () => {
//   return (
//     <div className="links">
//       {links.map((link, index) => (
//         <a
//           key={index}
//           href={link.url}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <i className="fa-solid fa-chevron-right"></i> {link.name}
//         </a>
//       ))}
//     </div>
//   );
// };

// export default LinksFooterPortais;

// ...existing code...
import React from "react";
import { links } from "./dataLinksReg"; // importa os links das regiões
// ...existing code...

const LinksFooterPortais = () => {
  const mid = Math.ceil(links.length / 2);
  const left = links.slice(0, mid);
  const right = links.slice(mid);

  return (
    <div className="links two-columns">
      <div className="col">
        {left.map((link, index) => (
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

      <div className="col">
        {right.map((link, index) => (
          <a
            key={index + mid}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-chevron-right"></i> {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksFooterPortais;
// ...existing code...