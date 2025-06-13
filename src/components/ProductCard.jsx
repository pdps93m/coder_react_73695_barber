import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ producto }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addToCart } = useCart();

  // Validación de producto
  if (!producto || !producto.imagen || !producto.nombre) return null;

  // Determinar si se puede agregar al carrito
  const puedeAgregar = producto.stock === undefined || producto.stock > 0;

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m={2}
        width="220px"
        boxShadow="md"
        cursor="pointer"
        _hover={{ boxShadow: "xl", transform: "scale(1.03)" }}
        onClick={onOpen}
        bg="brand.black"
        color="brand.white"
        p={0}
      >
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          width="100%"
          height="180px"
          objectFit="cover"
          borderTopRadius="lg"
          mb={0}
          display="block"
        />
        <Box p={3}>
          <Heading as="h3" size="sm" mb={1} color="brand.white">
            {producto.nombre}
          </Heading>
          <Text fontWeight="bold" color="brand.gold">
            ${producto.precio}
          </Text>
          <Text fontSize="sm" color="brand.white" mb={2}>
            {producto.descripcionCorta}
          </Text>
          <Button
            colorScheme="yellow"
            variant="solid"
            width="100%"
            mt={2}
            isDisabled={!puedeAgregar}
            onClick={e => {
              e.stopPropagation();
              addToCart(producto, 1);
            }}
          >
            {puedeAgregar ? "Agregar al carrito" : "Sin stock"}
          </Button>
        </Box>
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
              width="100%"
              objectFit="cover"
            />
            <Text fontWeight="bold" color="brand.gold" mb={2}>
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