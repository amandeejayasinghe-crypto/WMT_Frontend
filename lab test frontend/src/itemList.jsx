const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          {item.name} - Rs. {item.price}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
