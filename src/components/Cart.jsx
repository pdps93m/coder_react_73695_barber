import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "@chakra-ui/react";

const Cart = () => {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

  if (cart.length === 0) return <h2 style={{textAlign: "center"}}>El carrito está vacío</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrito de compras</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map(item => (
          <li key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <img src={item.image} alt={item.name} style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px" }} />
            <div style={{ flex: 1 }}>
              <strong>{item.name}</strong> x {item.quantity} <br />
              <span>${item.price} c/u</span>
            </div>
            <Button colorScheme="red" size="sm" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <Button colorScheme="orange" onClick={clearCart}>Vaciar carrito</Button>
    </div>
  );
};

export default Cart;