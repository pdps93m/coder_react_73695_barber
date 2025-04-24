import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar";

const App = () => {
  return (
   <ChakraProvider>
     <NavBar/>
   </ChakraProvider>
  );
};

/*function MyButton() { //aca debajo la funcion del button 
}

O sino como el profe dice que es mas simple con funcion flecha
const MyButton = () => {
  return (
    <button>Click me!</button>
  );
}
 fin del ejemplo con funcion flecha */




export default App;
