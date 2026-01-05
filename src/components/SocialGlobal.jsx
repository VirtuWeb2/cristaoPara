import { SOCIAL_EMBED_URL} from './../config/social.config.js'
import SocialEmbed from "./sideContent/social/SocialEmbed";

export default function SocialGlobal() {
  return (
    <>
      {SOCIAL_EMBED_URL.tiktok && (
        <SocialEmbed url={SOCIAL_EMBED_URL.tiktok} />
      )}

      {SOCIAL_EMBED_URL.x && <SocialEmbed url={SOCIAL_EMBED_URL.x} />}
    </>
  );
}
