import { IndexSingature } from "./interfaces/generalInterfaces";

export interface Theme {
  colors: IndexSingature;
  breakpoints: IndexSingature;
}

export const theme = {
  colors: {
    white: "#ffffff",
    black: "#18181B",
    silver: "#ccc5c5",
    gray: "#8c8787",
    stormGray: "#74788B",
    blue: "#0044CC",
    lightBlue: "#0055ff",
  },
  breakpoints: {
    smallest: "390px",
    small: "590px",
    medium: "830px",
    large: "992px",
    largest: "1300px",
  },
};
