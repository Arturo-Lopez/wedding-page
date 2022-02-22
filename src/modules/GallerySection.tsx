import { FC } from "react";
import { styled } from "@stitches";
import Image from "next/image";

const GallerySectionContainer = styled("section", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "50vw 50vw",
  gridTemplateRows: "50vw 50vw",
  ".item": {
    width: "100%",
    height: "100%",
  },
});

const GallerySection: FC = () => (
  <GallerySectionContainer>
    <div className="item">
      <Image
        src="/images/1.jpeg"
        alt="logo"
        layout="responsive"
        objectFit="cover"
        width="100%"
        height="100%"
      />
    </div>
    <div className="item">
      <Image
        src="/images/2.jpeg"
        alt="logo"
        layout="responsive"
        objectFit="cover"
        width="100%"
        height="100%"
      />
    </div>
    <div className="item">
      <Image
        src="/images/3.jpeg"
        alt="logo"
        layout="responsive"
        objectFit="cover"
        width="100%"
        height="100%"
      />
    </div>
    <div className="item">
      <Image
        src="/images/4.jpeg"
        alt="logo"
        layout="responsive"
        objectFit="cover"
        width="100%"
        height="100%"
      />
    </div>
  </GallerySectionContainer>
);

export default GallerySection;
