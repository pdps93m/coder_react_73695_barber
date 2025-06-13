import { Flex, Image, Button, Box } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const category = [
  { id: 1, slug: "cortes", name: "Cortes" },
  { id: 2, slug: "ropa", name: "Ropa" },
  { id: 3, slug: "cuidado-personal", name: "Cuidado Personal" },
  { id: 4, slug: "productos-barberos", name: "Productos para Barberos" }
];

const NavBar = () => (
  <Flex
    alignItems="center"
    justifyContent="space-between"
    width="100%"
    px={6}
    py={3}
    bg="brand.black"
    borderBottom="1px solid"
    borderColor="brand.white"
  >
    {/* Logo a la izquierda */}
    <Link to="/">
      <Image
        src="/src/assets/imagenes/logo_barber.png"
        alt="Logo Barbería"
        boxSize="48px"
        cursor="pointer"
      />
    </Link>

    {/* Categorías al centro */}
    <Flex gap={4}>
      {category.map(cat => (
        <Button
          key={cat.id}
          as={NavLink}
          to={`/categoria/${cat.slug}`}
          variant="link"
          color="brand.white"
          fontWeight="bold"
          fontSize="lg"
          _hover={{ color: "brand.gold" }}
          textTransform="capitalize"
        >
          {cat.name}
        </Button>
      ))}
    </Flex>

    {/* Carrito a la derecha */}
    <Box>
      {/* El CartWidget debe estar dentro de un Link para navegar a /cart */}
      <Link to="/cart">
        <CartWidget />
      </Link>
    </Box>
  </Flex>
);

export default NavBar;