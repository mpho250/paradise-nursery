import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b2b",
    description: "An easy-care plant perfect for indoor spaces.",
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
    description: "A tropical plant with beautiful split leaves.",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
    description: "A graceful plant with lush green foliage.",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    description: "A hardy succulent that thrives in bright spaces.",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    description: "A striking plant with glossy green leaves.",
  },
  {
    id: 6,
    name: "Pothos",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
    description: "A trailing plant that is easy to grow and maintain.",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    alert(`${plant.name} added to cart!`);
  };

  return (
    <main className="product-list">
      <h2>Our Plants</h2>
      <p>Bring nature home with our beautiful plant collection.</p>

      <div className="product-grid">
        {plants.map((plant) => (
          <article className="product-card" key={plant.id}>
            <img
              src={plant.image}
              alt={plant.name}
              className="product-image"
            />

            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p className="product-price">
              R{plant.price.toFixed(2)}
            </p>

            <button
              type="button"
              onClick={() => handleAddToCart(plant)}
            >
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}

export default ProductList;
