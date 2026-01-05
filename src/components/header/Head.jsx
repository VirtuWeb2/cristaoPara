import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./header.css";
import AnuncioHeader from "./ad";
const Head = () => {
  const [ad, setAd] = useState([]);
  const baseUrl = "https://api-sites-en.vercel.app";




  return (
    <>
      <section id="topo" className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <Link to="/">
              {/* <img src="../images/logo.png" alt="Logo do É notícia Pará" /> */}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
