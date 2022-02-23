import { FC } from "react";
import { styled } from "@stitches";
import Image from "next/image";

import Button from "src/components/Button";

const InfoSectionContainer = styled("section", {
  position: "relative",
  background: "$white",
  display: "flex",
  justifyContent: "center",
  gap: 30,
  flexDirection: "column",
  alignItems: "center",
  padding: "200px 20px",

  "@lg": {
    gap: 100,
    flexDirection: "row",
    padding: "50px 20px",
    "&::before, &::after": {
      height: 80,
      width: 160,
    },
  },

  "&::before, &::after": {
    content: "",
    display: "block",
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 200,
    width: 270,
  },

  "&::before": {
    left: 0,
    bottom: 0,
    backgroundImage: 'url("/images/flowers-down.png")',
  },
  "&::after": {
    right: 0,
    top: 0,
    backgroundImage: 'url("/images/flowers-up.png")',
  },
});

const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: 320,
  ".title": {
    fontSize: "$4",
    marginTop: "1rem",
    marginBottom: "1rem",
    fontWeight: "normal",
  },
  ".content": {
    lineHeight: "1.5em",
    marginBottom: 24,
  },
  variants: {
    align: {
      left: {
        alignItems: "start",
        textAlign: "left",
      },
      right: {
        alignItems: "end",
        textAlign: "right",
      },
    },
  },
});

const InfoSection: FC = () => (
  <InfoSectionContainer>
    <Card align="right">
      <Image src="/images/church.png" alt="church" width={60} height={60} />
      <h3 className="title">Ceremonia</h3>
      <p className="content">
        Participa de la ceremonia religiosa, el cual se realizara en la Iglesia
        Catedral a las 17:00hs del Sábado 19 de marzo del 2022.
      </p>
      <a
        href="https://goo.gl/maps/89b1R6cjrRbjizYe7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Ir a la ubicacion</Button>
      </a>
    </Card>
    <Card align="left">
      <Image
        src="/images/champagne.png"
        alt="champagne"
        width={60}
        height={60}
      />
      <h3 className="title">Recepción</h3>
      <p className="content">
        Te esperamos posteriormente celebrar nuestra union en la Estacion Dubois
        - Barrio San José. <b>Niños Dulces Sueños</b>
      </p>
      <a
        href="https://goo.gl/maps/NSG6Cq396n4594dNA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Ir a la ubicacion</Button>
      </a>
    </Card>
  </InfoSectionContainer>
);

export default InfoSection;
