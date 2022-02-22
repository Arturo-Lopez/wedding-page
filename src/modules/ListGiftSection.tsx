import { FC } from "react";
import { styled } from "@stitches";

const ListGiftSectionContainer = styled("section", {
  background: "$gray",
  color: "$white",
  padding: "50px 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  ".title": {
    fontSize: "$4",
    fontWeight: "normal",
    margin: "0 0 0.5em",
  },
  ".content": {
    maxWidth: 500,
    lineHeight: "1.5em",
  },
});

const ListGiftSection: FC = () => (
  <ListGiftSectionContainer>
    <h2 className="title">Lista de bodas</h2>
    <p className="content">
      Nuestro listados de compra lo puedes encontrar en los locales de{" "}
      <b>Olier y Tiendas Pilar</b>
    </p>
  </ListGiftSectionContainer>
);

export default ListGiftSection;
