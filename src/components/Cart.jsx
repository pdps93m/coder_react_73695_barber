import { useState } from "react";
import { Box, Heading, Image, Text, Button, Flex, IconButton, Spinner } from "@chakra-ui/react";
import { useCart } from "../context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
// 1. Importa Firestore y tu config
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, total } = useCart();

  // Estado para el formulario
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState(null);
  // 2. Estado para el loader
  const [loading, setLoading] = useState(false);

  // 3. Loader mientras se genera la orden
  if (loading) {
    return (
      <Box textAlign="center" mt={20}>
        <Spinner size="xl" color="brand.gold" />
        <Text mt={4}>Generando tu orden...</Text>
      </Box>
    );
  }

  if (cart.length === 0 && !success) {
    return (
      <Box textAlign="center" mt={10}>
        <Heading size="md" mb={4}>Tu carrito está vacío</Heading>
        <Button as={Link} to="/" colorScheme="yellow">
          Ir al inicio
        </Button>
      </Box>
    );
  }

  return (
    <Box maxW="800px" mx="auto" mt={8} p={4} bg="brand.black" color="brand.white" borderRadius="lg" boxShadow="lg">
      <Heading size="lg" mb={6} textAlign="center">Carrito de compras</Heading>
      {cart.map(item => (
        <Flex key={item.id} align="center" mb={6} p={3} borderBottom="1px solid" borderColor="brand.white">
          <Image
            src={item.imagen}
            alt={item.nombre}
            boxSize="80px"
            objectFit="cover"
            borderRadius="md"
            mr={4}
          />
          <Box flex="1">
            <Text fontWeight="bold" fontSize="lg">{item.nombre}</Text>
            <Text color="brand.gold" fontWeight="bold">${item.precio}</Text>
            <Text fontSize="sm">{item.descripcionCorta}</Text>
          </Box>
          <Flex align="center" gap={2}>
            <IconButton
              icon={<FaMinus />}
              size="sm"
              aria-label="Restar"
              onClick={() => updateQuantity(item.id, item.cantidad - 1)}
              isDisabled={item.cantidad <= 1}
            />
            <Text mx={2}>{item.cantidad}</Text>
            <IconButton
              icon={<FaPlus />}
              size="sm"
              aria-label="Sumar"
              onClick={() => {
                if (item.stock === undefined || item.cantidad < item.stock) {
                  updateQuantity(item.id, item.cantidad + 1);
                }
              }}
              isDisabled={item.stock !== undefined && item.cantidad >= item.stock}
            />
            <IconButton
              icon={<FaTrash />}
              size="sm"
              aria-label="Eliminar"
              colorScheme="red"
              onClick={() => removeFromCart(item.id)}
              ml={2}
            />
          </Flex>
        </Flex>
      ))}
      <Flex justify="space-between" align="center" mt={6}>
        <Button colorScheme="red" onClick={clearCart}>
          Vaciar carrito
        </Button>
        <Text fontWeight="bold" fontSize="xl" color="brand.gold">
          Total: ${total}
        </Text>
      </Flex>

      {/* Formulario de compra */}
      <Box mt={10} p={4} bg="brand.white" color="brand.black" borderRadius="md">
        <Heading size="md" mb={4}>Finalizar compra</Heading>
        {!success ? (
          <form
            // 4. Submit: crea la orden en Firestore y muestra loader
            onSubmit={async e => {
              e.preventDefault();
              if (!form.nombre || !form.email || !form.telefono) {
                setError("Todos los campos son obligatorios.");
                return;
              }
              if (!/\S+@\S+\.\S+/.test(form.email)) {
                setError("El email no es válido.");
                return;
              }
              setError("");
              setLoading(true);

              // 5. Crea la orden en Firestore
              const order = {
                buyer: { ...form },
                items: cart.map(item => ({
                  id: item.id,
                  nombre: item.nombre,
                  precio: item.precio,
                  cantidad: item.cantidad
                })),
                total,
                date: new Date()
              };

              try {
                const docRef = await addDoc(collection(db, "orders"), order);
                setOrderId(docRef.id); // ID real de Firestore
                setSuccess(true);
                clearCart();
                setForm({ nombre: "", email: "", telefono: "" });
              } catch (err) {
                setError("Hubo un error al generar la orden. Intenta nuevamente.");
              } finally {
                setLoading(false);
              }
            }}
          >
            <input
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              onChange={e => setForm({ ...form, nombre: e.target.value })}
              style={{ marginBottom: 8, width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              style={{ marginBottom: 8, width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={e => setForm({ ...form, telefono: e.target.value })}
              style={{ marginBottom: 8, width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            />
            {error && <Text color="red.500" mb={2}>{error}</Text>}
            <Button type="submit" colorScheme="yellow" width="100%" mt={2}>
              Confirmar compra
            </Button>
          </form>
        ) : (
          <Box textAlign="center">
            <Text color="green.600" mt={4} fontWeight="bold">
              ¡Compra realizada con éxito! Pronto nos contactaremos contigo.
            </Text>
            <Text mt={2}>
              Tu número de orden es: <b>{orderId}</b>
            </Text>
            <Button as={Link} to="/" colorScheme="yellow" mt={6}>
              Volver al inicio
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Cart;