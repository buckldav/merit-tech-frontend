import { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  blue: {
    100: "#E1EFFF",
    200: "#C5D3FD",
    300: "#A9B7E0",
    400: "#8E9CC4",
    500: "#7482A9",
    600: "#5A698E",
    700: "#425174",
    800: "#293A5C",
    900: "#102544",
  },
  brand: {
    100: "hsl(357, 71%, 90%)",
    200: "hsl(357, 71%, 80%)",
    300: "hsl(357, 71%, 70%)",
    400: "hsl(357, 71%, 60%)",
    500: "hsl(357, 71%, 50%)",
    600: "hsl(357, 71%, 40%)",
    700: "hsl(357, 71%, 30%)",
    800: "hsl(357, 71%, 20%)",
    900: "hsl(357, 71%, 10%)",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
