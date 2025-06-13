import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      black: "#181818",
      white: "#FFFFFF",
      gold: "#FFD700", // Solo para el carrito
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
        color: "brand.white",
        _hover: {
          color: "brand.gold",
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
          bg: "brand.white",
          color: "brand.black",
          _hover: {
            bg: "brand.black",
            color: "brand.white",
            border: "1px solid",
            borderColor: "brand.white",
          },
        },
        outline: {
          borderColor: "brand.white",
          color: "brand.white",
          _hover: {
            bg: "brand.white",
            color: "brand.black",
          },
        },
        // Puedes agregar un botón especial para el carrito
        cart: {
          bg: "brand.gold",
          color: "brand.black",
          _hover: {
            bg: "brand.white",
            color: "brand.gold",
            border: "1px solid",
            borderColor: "brand.gold",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "brand.white",
        letterSpacing: "wide",
      },
    },
    Card: {
      baseStyle: {
        bg: "brand.black",
        color: "brand.white",
        border: "1px solid",
        borderColor: "brand.white",
        borderRadius: "lg",
        boxShadow: "lg",
      },
    },
  },
});

export default theme;