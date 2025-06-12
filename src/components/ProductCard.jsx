import {
  Box,
  Image,
  Text,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";

const ProductCard = ({ producto }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Validación de producto
  if (!producto || !producto.imagen || !producto.nombre) return null;

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        m={2}
        width="220px"
        boxShadow="md"
        cursor="pointer"
        _hover={{ boxShadow: "xl", transform: "scale(1.03)" }}
        onClick={onOpen}
        bg="white"
      >
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          height="180px"
          objectFit="cover"
          mb={2}
          borderRadius="md"
        />
        <Heading as="h3" size="sm" mb={1}>
          {producto.nombre}
        </Heading>
        <Text fontWeight="bold" color="teal.600">
          ${producto.precio}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {producto.descripcionCorta}
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{producto.nombre}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              mb={4}
              borderRadius="md"
            />
            <Text fontWeight="bold" color="teal.600" mb={2}>
              Precio: ${producto.precio}
            </Text>
            <Text mb={2}>{producto.descripcionLarga}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;

