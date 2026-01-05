import { linksFace } from "./dataLinksFace";

const LinksFooterFace = () => {
  return (
    <div className="linksFace " id="flexLinksFace" >
      {linksFace.map((linkFace, index) => (
        <a
          key={index}
          href={linkFace.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-chevron-right"></i> {linkFace.name}
        </a>
      ))}
    </div>
  );
};

export default LinksFooterFace;