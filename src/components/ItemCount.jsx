import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={handleSubtract}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={() => onAdd(count)} style={{ marginLeft: "10px" }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;