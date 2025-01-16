import React, { useEffect, useState } from "react";
import "./newArrivals.css";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);


  async function getProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=10");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <section className="cards-container">
      <div className="card-heading">
        <h1>NEW ARRIVALS</h1>
      </div>
      <div className="card-body">
        {products.map((product) => (
          <div className="card-item" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="view-all-btn">
        <button className="show-all">View All</button>
      </div>
    </section>
  );
};

export default NewArrivals;
