import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import products from "./products"; 

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <Routes>
        {/* Catálogo general */}
        <Route path="./components/ItemListContainer" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
        {/* Catálogo filtrado por categoría */}
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        {/* Detalle de producto */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        {/* Ruta 404 */}
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;