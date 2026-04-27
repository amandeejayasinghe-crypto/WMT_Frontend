import { useState } from "react";
import { addItem } from "./api";

const ItemForm = ({ onItemAdded }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addItem({ name, price });
      setName("");
      setPrice("");
      onItemAdded(); // refresh list in App.jsx
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
