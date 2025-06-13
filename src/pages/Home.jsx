import { Box, Flex, Image, Heading } from "@chakra-ui/react";

const imagenes = [
  "https://i.postimg.cc/JnL2rkLM/iain-feeney-xe-WXo2-YOWBo-unsplash.jpg",
  "https://i.postimg.cc/wvrg42N0/laszlo-barta-l1-It-HRx3r-Co-unsplash.jpg",
  "https://i.postimg.cc/rwzmjD7V/marco-antonio-casique-reyes-61-Xj-JBerw-QY-unsplash.jpg"
];

const Home = () => (
  <>
    <Box mt={8} mb={6} textAlign="center">
      <Heading size="xl" color="brand.white" letterSpacing="wide">
        Giordano barber shopp & academy
      </Heading>
    </Box>
    <Flex gap={6} mb={8} wrap="wrap" justify="center">
      {imagenes.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Corte ${idx + 1}`}
          boxSize={["180px", "220px"]}
          objectFit="cover"
          borderRadius="lg"
          border="2px solid"
          borderColor="brand.white"
          boxShadow="lg"
        />
      ))}
    </Flex>
    {/* Aquí irá el contenido informativo más adelante */}
  </>
);

export default Home;