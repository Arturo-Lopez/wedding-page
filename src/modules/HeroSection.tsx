import { FC } from "react";
import { styled } from "@stitches";
import Image from "next/image";

const HeroSectionContainer = styled("section", {
  position: "relative",
  height: "100vh",
  width: "100%",
  overflow: "hidden",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "&::before": {
    content: "",
    backgroundImage:
      'linear-gradient(hsla(0, 0%, 20%, 0.4), hsla(0, 0%, 50%, 0.6)), url("/images/main.jpeg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  ".logo": {
    borderRadius: 85,
  },
});

const Title = styled("h1", {
  color: "$white",
  textAlign: "center",
  zIndex: 10,
  fontSize: "8vw",
  margin: "0.5em 0",
  "@lg": {
    fontSize: "$4",
  },
});

const HeroSection: FC = () => (
  <HeroSectionContainer>
    <Title>Lourdes Riveros y José Fariña</Title>
  </HeroSectionContainer>
);

export default HeroSection;
