import { Box, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const category = [
  { id: 1, slug: "cortes", name: "Cortes" },
  { id: 2, slug: "ropa", name: "Ropa" },
  { id: 3, slug: "cuidado-personal", name: "Cuidado Personal" },
  { id: 4, slug: "productos-barberos", name: "Productos para Barberos" }
];

const NavBar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      padding="0 25px"
      height="60px"
      backgroundColor="black"
      color="white"
    >
      {/* Logo de la tienda */}
      <Box fontSize="1.5rem" fontWeight="bold">
        <img src="/src/assets/imagenes/logo_barber.pn" alt="Logo de la tienda" style={{ height: "40px" }} />
      </Box>

      {/* Enlaces de navegación personalizados */}
      <Flex gap="15px">
        {category.map(cat => (
          <Button
            key={cat.id} // Usar id como key
            as={Link}
            to={`/categoria/${cat.slug}`} // Usar slug para la URL
            variant="link"
            color="white"
            textTransform="capitalize"
          >
            {cat.name}
          </Button>
        ))}
        <Button as={Link} to="/cart" colorScheme="teal">Carrito</Button>
      </Flex>

      {/* Widget del carrito */}
      <CartWidget />
    </Flex>
  );
};

export default NavBar;