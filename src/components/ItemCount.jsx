import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import categories from "../products";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        let found = null;
        for (const cat of categories) {
          found = cat.products.find(prod => prod.id === Number(itemId));
          if (found) break;
        }
        resolve(found);
      }, 1000);
    }).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) return <div style={{ padding: "20px", textAlign: "center" }}><p>Cargando detalle...</p></div>;
  if (!item) return <div style={{ padding: "20px", textAlign: "center" }}><p>Producto no encontrado</p></div>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} style={{ maxWidth: "200px" }} />
      <p>{item.description}</p>
      <p><strong>Precio:</strong> ${item.price}</p>
      <ItemCount product={item} stock={10} initial={1} />
    </div>
  );
};

export default ItemDetailContainer;