import { useEffect, useState } from "react";
import { getItems } from "./api";
import ItemForm from "./itemForm";
import ItemList from "./itemList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  // Fetch items from backend
  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // Load items when app starts
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container">
      <h1>Item Manager</h1>

      <ItemForm onItemAdded={fetchItems} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
