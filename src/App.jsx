import { ChakraProvider } from '@chakra-ui/react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> {/* ← Ruta del carrito */}
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;