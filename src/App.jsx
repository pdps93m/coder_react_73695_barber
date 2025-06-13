import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemListContainer";
import { CartProvider } from './context/CartContext';
import Cart from "./components/Cart"; 
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Router>
          {/* Barra superior única para toda la app */}
          <NavBar />
          {/* Contenido según la ruta */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;