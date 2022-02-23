import { FC } from "react";
import { styled } from "@stitches";
import Image from "next/image";

const GallerySectionContainer = styled("section", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "50vw  66vw",
  background: "$gray",
  ".item:nth-of-type(3)": {
    gridColumn: "1/3",
    gridRow: "2/3",
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
        objectFit="contain"
        width="100%"
        height="66%"
      />
    </div>
  </GallerySectionContainer>
);

export default GallerySection;
