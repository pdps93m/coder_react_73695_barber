import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div style={{
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    width: "200px",
    display: "inline-block",
    verticalAlign: "top",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
  }}>
    <Link to={`/item/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }}
      />
      <h3 style={{ margin: "10px 0 5px 0" }}>{product.name}</h3>
      <p style={{ margin: 0, fontWeight: "bold" }}>${product.price}</p>
    </Link>
  </div>
);

export default ProductCard;