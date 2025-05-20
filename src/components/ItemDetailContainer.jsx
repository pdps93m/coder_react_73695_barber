import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import categories from "../products";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Box, Card, CardBody, Image, Heading, Text, Stack } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        let found = null;
        for (const cat of categories) {
          found = cat.products.find(prod => prod.id === Number(itemId));
          if (found) break;
        }
        resolve(found);
      }, 1000);
    }).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) return <Box p={8} textAlign="center"><Text>Cargando detalle...</Text></Box>;
  if (!item) return <Box p={8} textAlign="center"><Text>Producto no encontrado</Text></Box>;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minH="70vh">
      <Card maxW="sm" boxShadow="lg" borderRadius="lg" p={4}>
        <CardBody>
          <Image src={item.image} alt={item.name} borderRadius="md" mb={4} />
          <Stack spacing={3}>
            <Heading size="md">{item.name}</Heading>
            <Text>{item.description}</Text>
            <Text fontWeight="bold" color="teal.600">Precio: ${item.price}</Text>
            <ItemCount
              stock={10}
              initial={1}
              onAdd={(quantity) => addToCart(item, quantity)}
            />
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ItemDetailContainer;