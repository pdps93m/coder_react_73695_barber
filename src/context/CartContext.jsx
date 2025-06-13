import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (producto, cantidad = 1) => {
    setCart(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        // Si tiene stock, no superar el máximo
        if (producto.stock) {
          const nuevaCantidad = Math.min(existe.cantidad + cantidad, producto.stock);
          return prev.map(item =>
            item.id === producto.id
              ? { ...item, cantidad: nuevaCantidad }
              : item
          );
        } else {
          // Si no tiene stock (ej: cortes), sumar sin límite
          return prev.map(item =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + cantidad }
              : item
          );
        }
      } else {
        return [...prev, { ...producto, cantidad }];
      }
    });
  };

  // Quitar producto del carrito
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Cambiar cantidad de un producto
  const updateQuantity = (id, cantidad) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad: Math.max(1, cantidad) } : item
      )
    );
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
};