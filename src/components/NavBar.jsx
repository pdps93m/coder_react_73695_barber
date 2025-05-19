import { Box, Flex, MenuButton, Menu, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

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
                <img src="/src/assets/imagenes/logo_barber.png.png" alt="Logo de la tienda" style={{ height: "40px" }} />
            </Box>

            {/* Enlaces de navegación */}
            <Flex gap="15px">
                <Button as={Link} to="/categoria/cortes" variant="link" color="white">Cortes de pelo</Button>
                <Button as={Link} to="/categoria/barba" variant="link" color="white">Cortes de barba</Button>
                <Button as={Link} to="/categoria/capacitaciones" variant="link" color="white">Capacitaciones</Button>
                <Button as={Link} to="/categoria/ropa" variant="link" color="white">Ropa</Button>
                <Button as={Link} to="/cart" colorScheme="teal">Carrito</Button>
            </Flex>

            {/* Menú desplegable */}
            <Menu>
                <MenuButton as={Button}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>

            {/* Widget del carrito */}
            <CartWidget />
        </Flex>
    );
};

export default NavBar;