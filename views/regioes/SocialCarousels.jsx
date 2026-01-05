
import React from "react";
import "./Carousel.css"; 
import Carousel from "./Carrossel" 


const siteItems = [
{ imageUrl: "../images/ENPARA.jpg", href: "https://www.enoticiapara.com.br/", title: "É Notícia Pará" },
  { imageUrl: "../images/291749099_454865993311604_8211581530285179069_n.png", href: "https://www.enoticiabelem.com.br/", title: "É Notícia Belém" },
  { imageUrl: "../images/ENANANINDEUA.png", href: "https://www.enoticiaananindeua.com.br/", title: "É Notícia Ananindeua" },
  { imageUrl: "../images/ENMARITUBA.png", href: "https://www.enoticiamarituba.com.br/", title: "É Notícia Marituba" },
  { imageUrl: "../images/ENARAGUAIA.jpg", href: "https://www.enoticiaaraguaia.com.br/", title: "É Notícia Araguaia" },
  { imageUrl: "../images/ENBAIXOAMAZONAS.png", href: "https://www.enoticiabaixoamazonas.com.br/", title: "É Notícia Baixo Amazonas" },
  { imageUrl: "../images/ENBAIXOTOCANTINS.jpg", href: "https://www.enoticiabaixotocantins.com.br/", title: "É Notícia Baixo Tocantins" },
  { imageUrl: "../images/ENCAETE.jpg", href: "https://www.enoticiacaete.com.br/", title: "É Notícia Caeté" },
  { imageUrl: "../images/ENCAPIM.jpg", href: "https://www.enoticiacapim.com.br/", title: "É Notícia Capim" },
  { imageUrl: "../images/ENCARAJAS.png", href: "https://www.enoticiacarajas.com.br/", title: "É Notícia Carajás" },
  { imageUrl: "../images/ENGUAJARINA.png", href: "https://www.enoticiaguajarina.com.br/", title: "É Notícia Guajarina" },
  { imageUrl: "../images/ENLAGOTUCURUI.jpg", href: "https://www.enoticialagodetucurui.com.br/", title: "É Notícia Lago Tucuruí" },
  { imageUrl: "../images/ENMARAJO.jpg", href: "https://www.enoticiamarajo.com.br/", title: "É Notícia Marajó" },
  { imageUrl: "../images/ENSALGADO.jpg", href: "https://www.enoticiasalgado.com.br/", title: "É Notícia Salgado" },
  { imageUrl: "../images/ENTAPAJOS.png", href: "https://www.enoticiatapajos.com.br/", title: "É Notícia Tapajós" },
  { imageUrl: "../images/ENXINGU.png", href: "https://www.enoticiaxingu.com.br/", title: "É Notícia Xingu" },
  

];

const instaItems = [
  { imageUrl: "../images/ENPARAINSTA.png", href: "https://instagram.com/enoticiapara", title: "É Notícia Pará" },
  { imageUrl: "../images/ENBELEMINSTA.png", href: "https://instagram.com/en_belem", title: "É Notícia Belém" },
  { imageUrl: "../images/ENANANINDEUAINSTA.png", href: "https://instagram.com/en_ananindeua/", title: "É Notícia Ananindeua" },
  { imageUrl: "../images/ENMARITUBAINSTA.png", href: "https://instagram.com/en_marituba", title: "É Notícia Marituba" },
  { imageUrl: "../images/ENBAIXOTOCANTINSINSTA.png", href: "https://www.instagram.com/en_btocantins/", title: "É Notícia Baixo Tocantins" },
  { imageUrl: "../images/ENCAETEINSTA.png", href: "https://instagram.com/en_caete", title: "É Notícia Caeté" },
  { imageUrl: "../images/ENCAPIMINSTA.png", href: "https://instagram.com/en_capim", title: "É Notícia Capim" },
  { imageUrl: "../images/ENMARAJOINSTA.png", href: "https://instagram.com/enoticia_marajo/", title: "É Notícia Marajó" },
  { imageUrl: "../images/ENSALGADOINSTA.png", href: "https://www.instagram.com/en_salgado/", title: "É Notícia Salgado" },
  { imageUrl: "../images/ENTAPAJOSINSTA.png", href: "https://www.instagram.com/en_tapajos/", title: "É Notícia Tapajós" },
  { imageUrl: "../images/ENXINGUINSTA.png", href: "https://instagram.com/en_xingu/", title: "É Notícia Xingu" },

];

const facebookItems = [
  { imageUrl: "../images/ENPARAFACE.png", href: "https://facebook.com/enoticiapara", title: "É Notícia Pará" },
  { imageUrl: "../images/ENBELEMFACE.png", href: "https://www.facebook.com/enoticiabelem", title: "É Notícia Belém" },
  { imageUrl: "../images/ENANANINDEUAFACE.png", href: "https://www.facebook.com/enoticiaananindeua", title: "É Notícia Ananindeua" },
  { imageUrl: "../images/ENMARITUBAFACE.png", href: "https://www.facebook.com/enoticiamarituba", title: "É Notícia Marituba" },
  { imageUrl: "../images/ENARAGUAIAFACE.png", href: "https://www.facebook.com/enoticiaaraguaia", title: "É Notícia Araguaia" },
  { imageUrl: "../images/ENBAIXOAMAZONASFACE.png", href: "https://www.facebook.com/enoticiabaixoamazonas", title: "É Notícia Baixo Amazonas" },
  { imageUrl: "../images/ENBAIXOTOCANTINSFACE.png", href: "https://www.facebook.com/enoticiabaixotocantins", title: "É Notícia Baixo Tocantins" },
  { imageUrl: "../images/ENCAETEFACE.png", href: "https://www.facebook.com/enoticiacaete", title: "É Notícia Caeté" },
  { imageUrl: "../images/ENCAPIMFACE.png", href: "https://www.facebook.com/enoticiacapim", title: "É Notícia Capim" },
  { imageUrl: "../images/ENCARAJASFACE.png", href: "https://www.facebook.com/enoticiacarajas", title: "É Notícia Carajás" },
  { imageUrl: "../images/ENGUAJARINAFACE.png", href: "https://www.facebook.com/enoticiaguajarina", title: "É Notícia Guajarina" },
  { imageUrl: "../images/ENLAGOTUCURUIFACE.png", href: "https://www.facebook.com/enoticialagodetucurui", title: "É Notícia Lago Tucuruí" },
  { imageUrl: "../images/ENMARAJOFACE.png", href: "https://www.facebook.com/enoticiamarajo", title: "É Notícia Marajó" },
  { imageUrl: "../images/ENSALGADOFACE.png", href: "https://www.facebook.com/enoticiasalgadooficial", title: "É Notícia Salgado" },
  { imageUrl: "../images/ENTAPAJOSFACE.png", href: "https://www.facebook.com/enoticiatapajos", title: "É Notícia Tapajós" },
  { imageUrl: "../images/ENXINGUFACE.png", href: "https://www.facebook.com/enoticiaxingu", title: "É Notícia Xingu" },
];


function CarouselSection({ title, items }) {
  return (
    <section className="carousel-section">
      <header className="carousel-header" style={{borderRadius:"0.5rem"}}>
        <h2 style={{paddingLeft:"1rem"}}>{title}</h2>
      </header>
      <Carousel items={items} />
    </section>
  );
}

export default function SocialCarousels({
  sites = siteItems,
  instas = instaItems,
  facebooks = facebookItems,
}) {
  return (
    <div className="carousel-grid">
      <CarouselSection title=" Portais" items={sites} />
      <CarouselSection title=" Instagram" items={instas} />
      <CarouselSection title=" Facebook" items={facebooks} />
    </div>
  );
}
