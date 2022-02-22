import { styled } from "@stitches";

const Button = styled("button", {
  background: "$gray",
  color: "$white",
  padding: "1em 3em",
  fontSize: "$1",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  variants: {
    variant: {
      normal: {
        background: "$gray",
        color: "$white",
      },
      light: {
        background: "$white",
        color: "$gray",
      },
    },
  },
});

export default Button;
