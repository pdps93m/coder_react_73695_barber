import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../products";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Simula una llamada asíncrona con retardo
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.id === Number(itemId)));
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
            <ItemCount stock={10} initial={1} onAdd={(quantity) => alert(`Agregaste ${quantity} unidades al carrito`)} />
        </div>
    );
};

export default ItemDetailContainer;