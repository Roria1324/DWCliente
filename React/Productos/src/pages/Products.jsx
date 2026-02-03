import React, { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import "./Products.css";
import Product from "./Product";
import useSupabase from "../hooks/useSupabase";

const Products = () => {

  const [field, setField] = useState("name");
  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const {
    getTable,
    getProductsOrdered,
    getProductsByName,
    getProductsByPrice,
    dataProducts,
    errorProducts,
  } = useProducts();
  const { sessionStarted } = useSupabase();

  useEffect(() => {
    getTable();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      getProductsOrdered(field, order);
    } else {
      getProductsByName(search, field, order);
    }
  }, [search]);

  useEffect(() => {
    getProductsByPrice(minPrice, maxPrice);
  }, [minPrice, maxPrice]);

  return (
    <>
      <div className="product-container">
        <h1>Products</h1>

        {sessionStarted && (
          <div className="filters">
            <select value={field} onChange={(e) => setField(e.target.value)}>
              <option value="name">Nombre</option>
              <option value="price">Precio</option>
              <option value="weight">Peso</option>
            </select>

            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>

            <input
              type="number"
              placeholder="Min price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />

            <input
              type="number"
              placeholder="Max price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />

            <input
              type="text"
              value={search}
              placeholder="Search product..."
              onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={() => getProductsOrdered(field, order)}>
              Aplicar
            </button>
          </div>
        )}

        {errorProducts && <p className="error-container">{errorProducts}</p>}
        <div className="products-grid">
          {dataProducts?.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              image_url={product.image_url}
              description={product.description}
              price={product.price}
              weight={product.weight}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
