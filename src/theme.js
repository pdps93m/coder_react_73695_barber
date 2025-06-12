import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      black: "#181818",
      white: "#FFFFFF",
      gray: "#B0B0B0",
      grayDark: "#444444",
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.black",
        color: "brand.white",
        fontFamily: "'Montserrat', sans-serif",
      },
      a: {
        color: "brand.gray",
        _hover: {
          color: "brand.grayDark",
          textDecoration: "underline",
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
      },
      variants: {
        solid: {
          bg: "brand.gray",
          color: "brand.black",
          _hover: {
            bg: "brand.grayDark",
            color: "brand.white",
          },
        },
        outline: {
          borderColor: "brand.gray",
          color: "brand.gray",
          _hover: {
            bg: "brand.gray",
            color: "brand.black",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "brand.gray",
        letterSpacing: "wide",
      },
    },
    Card: {
      baseStyle: {
        bg: "brand.black",
        color: "brand.white",
        border: "1px solid",
        borderColor: "brand.gray",
        borderRadius: "lg",
        boxShadow: "lg",
      },
    },
  },
});

export default theme;