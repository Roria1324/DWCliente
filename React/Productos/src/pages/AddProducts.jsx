import React, { useState, useEffect } from "react";
import "./AddProducts.css";
import useProducts from "../hooks/useProducts";
import {useNavigate, useParams } from "react-router-dom";

const productDefault = {
  name: "",
  description: "",
  price: "",
  weight: "",
  image_url: "",
};

const AddProducts = () => {
  const { createProduct, updateProduct, getProductById, dataProducts } =
    useProducts();
  const { id } = useParams();
  const [product, setProduct] = useState(productDefault);
  const navigate = useNavigate();

  const resetForm = () => {
    setProduct(productDefault);
  };

  useEffect(() => {
    if (id) {
      let productToEdit = dataProducts.find((p) => p.id === id);
      const loadProduct = async () => {
        if (!productToEdit) {
          productToEdit = await getProductById(id);
        }
        setProduct(productToEdit)
      };
      loadProduct();
    }
  }, [id, dataProducts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = () => {
    if (id) {
      updateProduct(id, product);
      navigate("/products");
    } else {
      createProduct({ ...product, id: crypto.randomUUID() });
      resetForm();
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
          {id ? "Update Product" : "Save Product"}
        </button>
      </div>
    </form>
  );
};

export default AddProducts;
