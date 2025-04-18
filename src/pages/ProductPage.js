const products = [
    { id: 1, name: "Aloe Vera", category: "Succulents", price: 12, image: "/images/aloe.jpg" },
    { id: 2, name: "Snake Plant", category: "Succulents", price: 15, image: "/images/snake.jpg" },
    { id: 3, name: "Monstera", category: "Tropical", price: 20, image: "/images/monstera.jpg" },
    { id: 4, name: "Peace Lily", category: "Flowering", price: 18, image: "/images/lily.jpg" },
    { id: 5, name: "Fiddle Leaf Fig", category: "Tropical", price: 25, image: "/images/fig.jpg" },
    { id: 6, name: "Jade Plant", category: "Succulents", price: 10, image: "/images/jade.jpg" },
  ];
  import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const categories = ["Succulents", "Tropical", "Flowering"];

const products = [
  { id: 1, name: "Aloe Vera", category: "Succulents", price: 12, image: "/images/aloe.jpg" },
  { id: 2, name: "Snake Plant", category: "Succulents", price: 15, image: "/images/snake.jpg" },
  { id: 3, name: "Monstera", category: "Tropical", price: 20, image: "/images/monstera.jpg" },
  { id: 4, name: "Peace Lily", category: "Flowering", price: 18, image: "/images/lily.jpg" },
  { id: 5, name: "Fiddle Leaf Fig", category: "Tropical", price: 25, image: "/images/fig.jpg" },
  { id: 6, name: "Jade Plant", category: "Succulents", price: 10, image: "/images/jade.jpg" },
];

export default function ProductPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [disabledButtons, setDisabledButtons] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setDisabledButtons((prev) => ({ ...prev, [product.id]: true }));
  };

  return (
    <div>
      <h2>Our Plants</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {products
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
                  <img src={plant.image} alt={plant.name} width="100%" />
                  <h4>{plant.name}</h4>
                  <p>€{plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={disabledButtons[plant.id]}
                  >
                    {disabledButtons[plant.id] ? "In Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
