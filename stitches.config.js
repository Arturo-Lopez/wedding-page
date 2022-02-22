import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      black: "hsl(206,10%,5%)",
      white: "white",
      gray: "hsl(0,0%,20%)",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    fontSizes: {
      1: "14px",
      2: "16px",
      3: "20px",
      4: "45px",
    },
    fonts: {
      Sans: "'Inter', sans-serif",
      Cursive: "'Great Vibes', cursive;",
    },
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    md: "(min-width: 520px)",
    lg: "(min-width: 1024px)",
  },
});

export const globalStyles = globalCss({
  "html, body, #__next": {
    height: "100%",
    margin: 0,
    padding: 0,
    fontFamily: "$Sans",
    color: "$gray",
  },
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "$Cursive",
  },
});
