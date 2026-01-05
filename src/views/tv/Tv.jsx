import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Iframe from "react-iframe";
import Heading from "../../components/heading/Heading";
import Side from "../../components/sideContent/side/Side";
import axios from "axios";
import Share from "../../components/share/Share";
import "./tv.css";

const Tv = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searched, setSearched] = useState(false);
  const searchLowerCase = search.toLocaleLowerCase();
  const baseUrl = "https://api-sites-en.vercel.app";

  const getPosts = async () => {
    try {
      const res = await axios.get(`${baseUrl}/tv`);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter((item) =>
      item.title.toLocaleLowerCase().includes(searchLowerCase)
    );
    setResults(filteredResults);
    if (search !== "") {
      setSearched(true);
    }
  }, [search]);

  let countResults = searched
    ? "Nenhum vídeo foi encontrado"
    : "Pesquise por um vídeo específico";
  const count = results.length;
  if (count > 0) {
    const noun = count > 1 ? " vídeos encontrados" : "vídeo encontrado";
    countResults = `${count} ${noun}`;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const normalizeYoutubeLink = (url) => {
  if (!url) return "";

  try {
    // PADRÃO SHORTS
    if (url.includes("/shorts/")) {
      const id = url.split("/shorts/")[1].split("?")[0];
      return `https://www.youtube.com/watch?v=${id}`;
    }

    // PADRÃO watch?v=
    if (url.includes("watch?v=")) {
      return url; // já está ok
    }

    // PADRÃO youtu.be
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/watch?v=${id}`;
    }

    // PADRÃO embed
    if (url.includes("/embed/")) {
      const id = url.split("/embed/")[1].split("?")[0];
      return `https://www.youtube.com/watch?v=${id}`;
    }

    return url; // fallback
  } catch (e) {
    return url;
  }
};

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>TV | EN PARÁ</title>
          <meta property="og:title" content="TV É Notícia Pará" />
          <meta
            property="og:description"
            content="Tv de notícias Paraense, atualizado diariamente com notícias de todos os jornais convencionais e fontes seguras"
          />
          <meta property="og:image" content="../images/logo.png" />
        </Helmet>
      </HelmetProvider>

      <main>
        <div className="container">
          <section className="mainContent tv ">
            <Heading title={"TV EN PARÁ"} />

            <div className="live">
            <Iframe
  url="https://www.youtube.com/embed/G9gvM6Ljksc?si=yhnJzyPQSBhXycFW"
  width="100%"
  height="500px"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

            </div>

            <div className="searchForm">
              <h1>Pesquisar vídeos: </h1>
              <input
                type="text"
                placeholder="Pesquisar por um vídeo específico..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="cards">
              <Heading title={countResults} />
              {search === ""
                ? posts.map((val) => (
                    <div key={val.id} className="box flexSB">
                      
                       <a href={normalizeYoutubeLink(val.link)} target="_blank" rel="noreferrer"

                      
                        className="img"
                      
                      >
                        <img src={val.cover} alt="" />
                      </a>
                      <div className="text">
                        <a href={val.link} target="_blank" rel="noreferrer">
                          <h1 className="title">{val.title}</h1>
                        </a>
                        <Share link={val.link} />
                      </div>
                    </div>
                  ))
                : results.map((val) => (
                    <div key={val.id} className="box flexSB">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div className="text">
                        <h1 className="title">{val.title}</h1>
                        <Share link={val.link} />
                      </div>
                    </div>
                  ))}
            </div>
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Tv;
