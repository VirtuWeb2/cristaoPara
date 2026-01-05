import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Heading from "../../heading/Heading";
import SocialMedia from "../social/SocialMedia";
import TvPosts from "../tvPosts/TvPosts";
import axios from "axios";
import "./side.css";
import TvPage from "../tvPosts/TvPage";
import SocialEmbed from "../social/SocialEmbed";
import SocialGlobal from "../../SocialGlobal";

const Side = () => {
  
  const { pathname } = useLocation();
  //Estados Principais
  const [news, setNews] = useState([]);
  const [ad, setAd] = useState([]);
  //Estados de carregamento e erro
  const [loadingNews, setLoadingNews] = useState(true);
const [loadingAd, setLoadingAd] = useState(true);
const [error, setError] = useState(null);
 
const baseUrl = "https://api-sites-en.vercel.app";

const getNews = async () => {
    try {
      setLoadingNews(true);
      const res = await axios.get(`${baseUrl}/news`);
      if(Array.isArray(res.data)) {
        setNews(res.data);
      }else{
        setNews([]);
        console.warn("Resposta inesperada ao buscar notícias: ", res.data);
      }
    } catch (err) {
      console.error("Erro ao buscar as notícias ",err);
      setError("Não foi possível carregar as notícias.");
    } finally{
      setLoadingNews(false);
    }
  };

  // useEffect(() => {
  //   getNews();
  // }, []);

  const getAd = async () => {
    try {
      setLoadingAd(true);
      const res = await axios.get(`${baseUrl}/ad`);
     if(Array.isArray(res.data)){ 
      setAd(res.data);
    } else {
      setAd([]);
      console.warn("Resposta inesperada ao buscar anúncios: ", res.data);
    }
  }catch (err) {
      console.error("Erro ao buscar os anúncios ", err);
      setError("Não foi possível carregar os anúncios.");
    setAd([]);}
    finally {
      setLoadingAd(false);
    }
  };

  useEffect(() => {
    getNews();
    getAd();
  }, []);

  const filterBannerPosition = (position) => {
    if (!Array.isArray(ad)) return[];
     return ad.filter((item)=>item.position === position)
      
    }    
  const filteredBanner = filterBannerPosition("banner side");


  function removerAcentos(s) {
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  return (
    <>
{/* TV Posts */}
      {/* {pathname !== "/tv-en-para" && <TvPosts />}
      <TvPage/> */}
      {/* <SocialEmbed url="https://www.tiktok.com/@enoticia_pa/video/7582679267201305864"/>
      <SocialEmbed url="https://twitter.com/enoticiapara/status/1984275429470212462"/> */}
      <SocialGlobal/>
{/* Categorias */}
      <section className="catgorys">
        <Heading title={"Categorias"} />
        {loadingNews ? (
          <p>Carregando categorias...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : Array.isArray(news) && news.length > 0 ? (
          news
            .reduce((unique, item) => {
              const catSemAcentos = removerAcentos(item.cat || "");
              return unique.includes(catSemAcentos)
                ? unique
                : [...unique, catSemAcentos];
            }, [])
              .filter(cat =>
      ["politica", "seguranca", "esportes", "foco"].includes(
        cat.toLowerCase()
      )
    )   
   
    .sort(
     (a, b) =>
        ["politica", "seguranca", "esportes", "foco"].indexOf(
          a.toLowerCase()
        ) -
        ["politica", "seguranca", "esportes", "foco"].indexOf(
          b.toLowerCase()
        ))
            .map((cat, index) => (
              <Link key={index} to={`/${cat}`} className="category category1">
                {cat}
              </Link>
            ))
        ) : (
          <p>Nenhuma categoria encontrada.</p>
        )}
      </section>
{/* Social Links */}
      <Heading title={"Mantenha-se navegando!"} />
      <SocialMedia />
{/* Anúncios */}
    {/* {loadingAd ? (
        <p>Carregando anúncios...</p>
      ) : filteredBanner.length > 0 ? (
        filteredBanner.map((item, index) => (
          <section key={index} className="banner">
            <Link
              to={item.link}
              target="_blank"
              aria-label="Acesse o site do anunciante"
              >
              <img src={item.cover} alt="" loading="lazy" />
            </Link>
          </section>
        ))
      ) : (
        <p>Nenhum anúncio disponível.</p>
      )} */}

        </>
      )
    };


export default Side;
