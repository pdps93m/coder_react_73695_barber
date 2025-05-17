import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../products";

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Simula una llamada asíncrona con retardo
        new Promise((resolve) => {
            setTimeout(() => {
                if (categoryId) {
                    resolve(products.filter(prod => prod.category === categoryId));
                } else {
                    resolve(products);
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
                <p>Cargando productos...</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {items.map(item => (
                        <li key={item.id}>
                            <Link to={`/item/${item.id}`}>
                                <strong>{item.name}</strong> - ${item.price}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemListContainer;