import { FC } from "react";
import { styled } from "@stitches";

const HeroSectionContainer = styled("section", {
  position: "relative",
  height: "100vh",
  width: "100%",
  overflow: "hidden",
  padding: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "end",

  "&::before": {
    content: "",
    backgroundImage:
      'linear-gradient(hsla(0, 0%, 40%, 0.1), hsla(0, 0%, 50%, 0.5)), url("/images/main-2.jpeg")',
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
