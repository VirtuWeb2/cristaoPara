  
  import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ad.css";
const AnuncioHeader = () => {
  const [ad, setAd] = useState([]);
  const baseUrl = "https://api-sites-en.vercel.app";
  const getAd = async () => {
    try {
      const res = await axios.get(`${baseUrl}/ad`);
      setAd(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAd();
  }, [setAd]);

 const filterBannerPosition = (position) => {
   if (!Array.isArray(ad) || ad.length === 0) {
     return [];
   }
   return ad.filter((item) => item.position === position);
 };

  const filteredBanner = filterBannerPosition("banner header");
return (
    <>
{/* <section className="container-ad">
          {filteredBanner.length > 0 && (
  <div className="ad-image1">
    <Link to={filteredBanner[0].link} target="_blank" aria-label="Anuncio governo do estado">
      <img src={filteredBanner[0].cover} alt="Anúncio" />
    </Link>
  </div>
)}
          {filteredBanner.length > 0 && (
  <div className="ad-image2">
    <Link to={filteredBanner[1].link} target="_blank" aria-label="Anuncio governo do estado">
      <img src={filteredBanner[1].cover} alt="Anúncio" />
    </Link>
  </div>
)}
 </section> */}
</>
);
};
export default AnuncioHeader;