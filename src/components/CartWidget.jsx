import { Box, Icon, Badge } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useCart();
  // Suma total de productos en el carrito
  const cantidad = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Box position="relative">
      <Icon as={FaShoppingCart} w={7} h={7} color="brand.gold" />
      {cantidad > 0 && (
        <Badge
          position="absolute"
          top="-1"
          right="-1"
          bg="red.500"
          color="white"
          borderRadius="full"
          px={2}
          fontSize="0.8em"
        >
          {cantidad}
        </Badge>
      )}
    </Box>
  );
};

export default CartWidget;