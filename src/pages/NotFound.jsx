import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Box textAlign="center" mt={20}>
    <Heading size="2xl" mb={4}>404</Heading>
    <Text fontSize="xl" mb={6}>La página que buscas no existe.</Text>
    <Button as={Link} to="/" colorScheme="yellow">
      Volver al inicio
    </Button>
  </Box>
);

export default NotFound;