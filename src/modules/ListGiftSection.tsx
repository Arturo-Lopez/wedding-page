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
  ".link": {
    textDecoration: "underline",
    color: "$white",
  },
});

const ListGiftSection: FC = () => (
  <ListGiftSectionContainer>
    <h2 className="title">Lista de bodas</h2>
    <p className="content">
      Nuestra lista de regalos lo puedes encontrar en los locales de{" "}
      <b>Olier</b> y{" "}
      <a
        href="https://goo.gl/maps/QkdkLQsvKQY9vjwN7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <b className="link">Tiendas Pilar</b>
      </a>
    </p>
  </ListGiftSectionContainer>
);

export default ListGiftSection;
