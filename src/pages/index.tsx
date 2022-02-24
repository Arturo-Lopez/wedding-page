import { globalStyles } from "@stitches";

import HeroSection from "src/modules/HeroSection";
import GallerySection from "src/modules/GallerySection";
import InfoSection from "src/modules/InfoSection";
import ListGiftSection from "src/modules/ListGiftSection";
import ConfirmSection from "src/modules/ConfirmSection";

const Home = () => {
  globalStyles();

  return (
    <>
      <audio id="musicplayer" autoPlay>
        <source src="/audios/music.mp3" />
      </audio>
      <HeroSection />
      <GallerySection />
      <InfoSection />
      <ListGiftSection />
      <ConfirmSection />
    </>
  );
};

export default Home;
