import { useEffect } from "react";

export default function SocialEmbed({ url }) {
  useEffect(() => {
    // TikTok
    if (url.includes("tiktok.com")) {
      if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }

    // X (Twitter)
    if (url.includes("twitter.com") || url.includes("x.com")) {
      if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
      } else if (window.twttr?.widgets) {
        window.twttr.widgets.load();
      }
    }
  }, [url]);

  // 🔹 TikTok
  if (url.includes("tiktok.com")) {
    const videoId = url.split("/video/")[1]?.split("?")[0];

    return (
      <div className="tiktok-embed-wrapper">
        <blockquote
          className="tiktok-embed"
          cite={url}
          data-video-id={videoId}
          style={{ maxWidth: "605px", minWidth: "325px" }}
        >
          <section></section>
        </blockquote>
      </div>
    );
  }

  // 🔹 X (Twitter)
  if (url.includes("twitter.com") || url.includes("x.com")) {
    return (
      <div className="twitter-embed-wrapper">
        <blockquote className="twitter-tweet">
          <a href={url}></a>
        </blockquote>
      </div>
    );
  }

  return null;
}
