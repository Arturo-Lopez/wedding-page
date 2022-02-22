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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    filter: "blur(6px)",
    margin: "-10px",
  },

  ".logo": {
    borderRadius: 85,
  },
});

const Title = styled("h1", {
  color: "$white",
  textAlign: "center",
  zIndex: 10,
  fontSize: "$4",
  margin: "0.5em 0",
});

const HeroSection: FC = () => (
  <HeroSectionContainer>
    <Image
      src="/images/logo.png"
      alt="logo"
      width={170}
      height={170}
      className="logo"
    />
    <Title>Lourdes Riveros y José Fariña</Title>
  </HeroSectionContainer>
);

export default HeroSection;
