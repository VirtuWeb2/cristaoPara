import React, { useEffect, useState } from "react";
import axios from "axios";
import NewCard from "../../../../components/cards/Cards";

const Regiao = ({news}) => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const baseUrl = "https://api-sites-en.vercel.app/admin";

  const getNews = async () => {
    try {
      const res = await axios.get(`${baseUrl}/news`);
      setNewsData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNews();
    const interval = setInterval(getNews,60000);
    return() => clearInterval(interval);
  }, []);

  const filterNewsByRegion = (region) => {
    if (news.length === 0) {
      return [...newsData];
    }
    return news
      .filter((item) => item.reg === region)
      .slice(-20)
      .sort((a, b) => b.id - a.id);
  };

  const filteredMetro = filterNewsByRegion("metropolitano");
  const filteredMarajo = filterNewsByRegion("marajó");
  const filteredCarajas = filterNewsByRegion("carajás");
  const filteredAmazonas = filterNewsByRegion("baixo amazonas");
  const filteredLago = filterNewsByRegion("lago tucuruí");
  const renderedItems = news.slice(-20).sort((a, b) => b.id - a.id);

  return (
    <>
      {/* <NewCard
        regionLink={"/search"}
        regionTitle={"Pílulas da Fé"}
        newsData={renderedItems}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={renderedItems.length}
        paginate={setCurrentPage}
      /> */}
        <NewCard
          regionLink={"regioes/"}
          regionTitle={"Pílulas da Fé"}
          newsData={filteredLago}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredCarajas.length}
          paginate={setCurrentPage}
        />
      <NewCard
        regionLink={"regioes/"}
        regionTitle={"Comunidade"}
        newsData={filteredMetro}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredLago.length}
        paginate={setCurrentPage}
      />
      <NewCard
        regionLink={"regioes/"}
        regionTitle={"Versículos do Dia"}
        newsData={filteredMarajo}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredMarajo.length}
        paginate={setCurrentPage}
      />
      <NewCard
        regionLink={"regioes/"}
        regionTitle={"Devocional"}
        newsData={filteredCarajas}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredCarajas.length}
        paginate={setCurrentPage}
      />
      <NewCard
        regionLink={"regioes/"}
        regionTitle={"Notícias"}
        newsData={filteredAmazonas}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredCarajas.length}
        paginate={setCurrentPage}
      />
    </>
  );
};

export default Regiao;
