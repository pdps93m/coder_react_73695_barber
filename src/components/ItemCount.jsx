import { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
  };

  return (
    <Flex alignItems="center" gap="10px" justifyContent="center" mt={4}>
      <Button onClick={handleDecrement} disabled={count <= 1}>-</Button>
      <span>{count}</span>
      <Button onClick={handleIncrement} disabled={count >= stock}>+</Button>
      <Button colorScheme="teal" onClick={() => onAdd(count)}>
        Agregar al carrito
      </Button>
    </Flex>
  );
};

export default ItemCount;