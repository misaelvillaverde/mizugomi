import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});

export const themeDictionary = {
  white: "brand.100",
  black: "brand.900",
};

export default theme;
