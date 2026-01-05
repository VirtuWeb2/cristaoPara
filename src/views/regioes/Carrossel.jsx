import React, { useRef } from "react";
import "./Carousel.css";


/**
 * Como usar:
 * - Suba suas imagens em /public/profiles/ ou use URLs do Firebase/Cloudinary.
 * - Preencha "items" com { imageUrl, href, title }.
 *   - href: link do Instagram (ex.: "https://instagram.com/tedcordeirojr")
 */
const defaultItems = [
{ imageUrl: "../images/ENPARA.jpg", href: "https://instagram.com/enoticiapara", title: "É Notícia Pará" },
  { imageUrl: "../images/291749099_454865993311604_8211581530285179069_n.png", href: "https://instagram.com/en_belem", title: "É Notícia Belém" },
  { imageUrl: "../images/ENANANINDEUA.png", href: "https://instagram.com/en_ananindeua/", title: "É Notícia Ananindeua" },
  { imageUrl: "../images/ENMARITUBA.png", href: "https://instagram.com/en_marituba", title: "É Notícia Marituba" },
  { imageUrl: "../images/ENSALGADO.jpg", href: "https://www.instagram.com/en_salgado/", title: "É Notícia Salgado" },
  { imageUrl: "../images/ENBAIXOTOCANTINS.jpg", href: "https://www.instagram.com/en_btocantins/", title: "É Notícia Baixo Tocantins" },
  { imageUrl: "../images/ENTAPAJOS.png", href: "https://www.instagram.com/en_tapajos/", title: "É Notícia Tapajós" },
  { imageUrl: "../images/ENMARAJO.jpg", href: "https://instagram.com/enoticia_marajo/", title: "É Notícia Marajó" },
  // { imageUrl: "../images/ENBENEVIDES.png", href: "https://instagram.com/en_benevides", title: "É Notícia Benevides" },
  // { imageUrl: "../images/ENLAGOTUCURUI.jpg", href: "https://instagram.com/enoticiabelem", title: "É Notícia Lago Tucuruí" },
  // { imageUrl: "../images/ENARAGUAIA.jpg", href: "https://instagram.com/enoticiabelem", title: "É Notícia Araguaia" },
  { imageUrl: "../images/ENBAIXOAMAZONAS.png", href: "https://www.instagram.com/en_baixoamazonas/", title: "É Notícia Baixo Amazonas" },
  // { imageUrl: "../images/ENCAETE.jpg", href: "https://instagram.com/enoticiabelem", title: "É Notícia Caeté" },
  { imageUrl: "../images/ENCAPIM.jpg", href: "https://www.instagram.com/en_capim/", title: "É Notícia Capim" },
  // { imageUrl: "../images/ENGUAJARINA.png", href: "https://instagram.com/enoticiabelem", title: "É Notícia Belém" },
  // { imageUrl: "../images/ENCARAJAS.png", href: "https://instagram.com/enoticiabelem", title: "É Notícia Belém" },
  
  // ...adicione até 15 (ou mais) cards
];

export default function Carousel({ items = defaultItems }) {
  const trackRef = useRef(null);
  const SCROLL = 1200;

  const scrollLeft = () => trackRef.current?.scrollBy({ left: -SCROLL, behavior: "smooth" });
  const scrollRight = () => trackRef.current?.scrollBy({ left: SCROLL, behavior: "smooth" });

  return (
    <div className="carousel-container" aria-label="Carrossel de perfis">
      <button className="nav-btn left" onClick={scrollLeft} aria-label="Anterior">&#10094;</button>

      <div className="carousel-track" ref={trackRef}>
        {items.map((it, i) => (
          <a
            key={i}
            className="card"
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            title={it.title || "Abrir no Instagram"}
          >
            <img
              src={it.imageUrl}
              alt={it.title ? `Abrir ${it.title} no Instagram` : "Abrir perfil no Instagram"}
              loading="lazy"
              onError={(e) => { e.currentTarget.src = "/profiles/placeholder-profile.png"; }}
            />
            {it.title && <span className="caption">{it.title}</span>}
          </a>
        ))}
      </div>

      <button className="nav-btn right" onClick={scrollRight} aria-label="Próximo">&#10095;</button>
    </div>
  );
}
