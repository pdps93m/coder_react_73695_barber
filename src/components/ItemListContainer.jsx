import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Categorías principales
const category = [
  { id: 1, slug: "cortes", name: "Cortes" },
  { id: 2, slug: "ropa", name: "Ropa" },
  { id: 3, slug: "cuidado-personal", name: "Cuidado Personal" },
  { id: 4, slug: "productos-barberos", name: "Productos para Barberos" }
];

// Subcategorías de ropa
const ropaSubcategories = [
  { slug: "camperas", name: "Camperas" },
  { slug: "remeras", name: "Remeras" },
  { slug: "pantalones", name: "Pantalones" },
  { slug: "riñoneras", name: "Riñoneras" },
  { slug: "jeans", name: "Jeans" },
  { slug: "championes", name: "Championes" }
];

// Slidebar para subcategorías
const Slidebar = ({ subcategories, selected, onSelect }) => (
  <Flex gap={2} mb={6} justify="center">
    {subcategories.map(sub => (
      <Button
        key={sub.slug}
        variant={selected === sub.slug ? "solid" : "outline"}
        colorScheme="teal"
        size="sm"
        onClick={() => onSelect(sub.slug)}
      >
        {sub.name}
      </Button>
    ))}
  </Flex>
);

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [selectedSub, setSelectedSub] = useState(null);

  // Estado para productos y loading
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Traer productos desde Firestore
  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      try {
        const productosRef = collection(db, "productos");
        const snapshot = await getDocs(productosRef);
        const productosData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  useEffect(() => {
    setSelectedSub(null);
  }, [categoryId]);

  const selectedCategory = category.find(cat => cat.slug === categoryId);

  console.log(productos);
  // Filtrar productos por categoría
  const productosFiltrados = categoryId === "ropa"
    ? selectedSub
      ? productos.filter(
          prod =>
            prod &&
            prod.categoria === "ropa" &&
            prod.subcategoria === selectedSub
        )
      : productos.filter(prod => prod && prod.categoria === "ropa")
    : [];

  const productosCortes = categoryId === "cortes"
    ? productos.filter(prod => prod && prod.categoria === "cortes")
    : [];

  const productosCuidadoPersonal = categoryId === "cuidado-personal"
    ? productos.filter(prod => prod && prod.categoria === "cuidado-personal")
    : [];

  const productosBarberos = categoryId === "productos-barberos"
    ? productos.filter(prod => prod && prod.categoria === "productos-barberos")
    : [];

  // Contenido personalizado por categoría
  const categoryContent = {
    cortes: (
      <Box>
        <Heading as="h2" size="md" mb={4}>Cortes</Heading>
        {loading ? (
          <Text>Cargando productos...</Text>
        ) : (
          productosCortes.length > 0 ? (
            <Flex wrap="wrap" justify="center">
              {productosCortes.map(prod => (
                <ProductCard key={prod.id} producto={prod} />
              ))}
            </Flex>
          ) : (
            <Text>No hay productos en esta categoría.</Text>
          )
        )}
      </Box>
    ),
    ropa: (
      <Box>
        <Heading as="h2" size="md" mb={4}>Ropa</Heading>
        <Text mb={4}>Explorá nuestra colección y filtrá por tipo de prenda:</Text>
        <Slidebar
          subcategories={ropaSubcategories}
          selected={selectedSub}
          onSelect={setSelectedSub}
        />
        <Text mb={4}>
          {selectedSub
            ? `Mostrando productos de la subcategoría: ${ropaSubcategories.find(sub => sub.slug === selectedSub)?.name}`
            : "Mostrando todos los productos de ropa. Selecciona una subcategoría para filtrar."
          }
        </Text>
        {loading ? (
          <Text>Cargando productos...</Text>
        ) : (
          productosFiltrados.length > 0 ? (
            <Flex wrap="wrap" justify="center">
              {productosFiltrados
                .filter(prod => prod && prod.imagen && prod.nombre)
                .map(prod => (
                  <ProductCard key={prod.id} producto={prod} />
                ))}
            </Flex>
          ) : (
            <Text>No hay productos en esta subcategoría.</Text>
          )
        )}
      </Box>
    ),
    "cuidado-personal": (
      <Box>
        <Heading as="h2" size="md" mb={4}>Cuidado Personal</Heading>
        {loading ? (
          <Text>Cargando productos...</Text>
        ) : (
          productosCuidadoPersonal.length > 0 ? (
            <Flex wrap="wrap" justify="center">
              {productosCuidadoPersonal.map(prod => (
                <ProductCard key={prod.id} producto={prod} />
              ))}
            </Flex>
          ) : (
            <Text>No hay productos en esta categoría.</Text>
          )
        )}
      </Box>
    ),
    "productos-barberos": (
      <Box>
        <Heading as="h2" size="md" mb={4}>Productos para Barberos</Heading>
        {loading ? (
          <Text>Cargando productos...</Text>
        ) : (
          productosBarberos.length > 0 ? (
            <Flex wrap="wrap" justify="center">
              {productosBarberos.map(prod => (
                <ProductCard key={prod.id} producto={prod} />
              ))}
            </Flex>
          ) : (
            <Text>No hay productos en esta categoría.</Text>
          )
        )}
      </Box>
    )
  };

  return (
    <Box p={8} textAlign="center">
      <Heading as="h1" mb={6}>
        {selectedCategory ? selectedCategory.name : greeting}
      </Heading>
      {!categoryId ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {category.map(cat => (
            <li key={cat.id}>
              <Link to={`/categoria/${cat.slug}`}>
                <strong>{cat.name}</strong>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Box mt={4}>
          {categoryContent[categoryId] || <Text>Pronto agregaremos contenido a esta categoría.</Text>}
        </Box>
      )}
    </Box>
  );
};

export default ItemListContainer;