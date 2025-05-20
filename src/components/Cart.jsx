import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) return <p>El carrito está vacío</p>;

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map((prod, idx) => (
          <li key={idx}>
            {prod.name} - Cantidad: {prod.quantity} - Precio: ${prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;