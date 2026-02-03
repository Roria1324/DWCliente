import React, { useState, useEffect } from "react";
import "./AddProducts.css";
import useProducts from "../hooks/useProducts";

const AddProducts = ({ initialData }) => {
  const { createProduct, updateProduct } = useProducts();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    weight: "",
    image_url: "",
  });

  useEffect(() => {
    if (initialData) {
      setProduct(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = () => {
    if (product.id) {
      updateProduct(product.id, product);
    } else {
      createProduct({ ...product, id: crypto.randomUUID() });
    }
  };

  return (
    <form className="product-form">
      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          className="form-input"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product name"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Description</label>
        <textarea
          className="form-textarea"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product description"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Price</label>
        <input
          className="form-input"
          type="number"
          step="0.01"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="0.00"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Weight</label>
        <input
          className="form-input"
          type="number"
          step="0.01"
          name="weight"
          value={product.weight}
          onChange={handleChange}
          placeholder="0.00"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Image</label>
        <input
          className="form-input"
          name="image_url"
          value={product.image_url}
          onChange={handleChange}
          placeholder="Image URL"
        />
      </div>

      <div className="form-actions">
        <button className="form-button" type="button" onClick={handleSave}>
          {initialData ? "Update Product" : "Save Product"}
        </button>
      </div>
    </form>
  );
};

export default AddProducts;
