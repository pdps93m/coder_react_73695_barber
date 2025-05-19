import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import categories from "../products";
import ProductCard from "./ProductCard";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          // Busca la categoría y muestra sus productos
          const category = categories.find(cat => cat.id === categoryId);
          resolve(category ? category.products : []);
        } else {
          // Muestra las categorías
          resolve(categories);
        }
      }, 1000);
    }).then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{greeting}</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        !categoryId ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map(cat => (
              <li key={cat.id}>
                <Link to={`/categoria/${cat.id}`}>
                  <strong>{cat.name}</strong>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {items.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default ItemListContainer;