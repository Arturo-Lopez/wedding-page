import { FC } from "react";
import { styled } from "@stitches";
import Button from "src/components/Button";

const ConfirmSectionContainer = styled("section", {
  background: "$white",
  color: "$gray",
  padding: "50px 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  ".title": {
    fontSize: "$4",
    fontWeight: "normal",
    margin: 0,
  },
  ".content": {
    maxWidth: 500,
    lineHeight: "1.5em",
    marginBottom: "2em",
  },
});

const ConfirmSection: FC = () => (
  <ConfirmSectionContainer>
    <h2 className="title">Confirma tu presencia!</h2>
    <p className="content">Comentanos si tienes planeado asistir al evento</p>
    <a
      href="https://wa.me/595973680808"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>Confimar presencia</Button>
    </a>
  </ConfirmSectionContainer>
);

export default ConfirmSection;
