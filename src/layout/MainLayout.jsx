import NavBar from "../components/NavBar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <>
    <NavBar />
    <Box bg="gray.100" py={4} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" color="teal.700" mb={4}>
        Giordano Barber Shopp & Academy
      </Text>
      <Flex justify="center" gap={6} mb={6} flexWrap="wrap">
        <Image src="/img1.jpg" alt="Imagen 1" boxSize="180px" borderRadius="md" />
        <Image src="/img2.jpg" alt="Imagen 2" boxSize="180px" borderRadius="md" />
        <Image src="/img3.jpg" alt="Imagen 3" boxSize="180px" borderRadius="md" />
      </Flex>
    </Box>
    <Outlet />
  </>
);

export default MainLayout;