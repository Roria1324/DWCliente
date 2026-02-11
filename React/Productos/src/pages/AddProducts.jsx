import React, { useState, useEffect } from "react";
import "./AddProducts.css";
import useProducts from "../hooks/useProducts";
import { useNavigate, useParams } from "react-router-dom";
import validateAll from "../components/validations.js";

const productDefault = {
  name: "",
  description: "",
  price: "",
  weight: "",
  image_url: "",
};

const AddProducts = () => {
  const { insertProduct, editProduct, getProductById, dataProducts, getData } =
    useProducts();

  const { id } = useParams();
  const [product, setProduct] = useState(productDefault);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const resetForm = () => {
    setProduct(productDefault);
  };

  //UseEffect que hace una doble búsqueda (una en el contexto/provider
  // y sino lo encuentra hace la llamada para traer los datos) del producto
  // para mostrar los datos en caso de querer editarlo.
  useEffect(() => {
    if (id) {
      const loadProduct = async () => {
        let productToEdit = dataProducts.find((p) => p.id === id);
        if (!productToEdit) {
          productToEdit = await getProductById(id);
        }
        setProduct(productToEdit || productDefault);
      };
      loadProduct();
    }
  }, [id, dataProducts, getData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    //Si hay errores se guardan y se muestran donde esté el error.
    const result = validateAll(product);
    if (Object.keys(result).length > 0) {
      setError(result);
      return;
    }
    try {
      //Si se accede al formulario con una id se usa el método put.
      if (id) {
        await editProduct(product, id);
      } else {
        await insertProduct({ ...product, id: crypto.randomUUID() });
        resetForm();
      }
      navigate("/products");
      setError({});
    } catch (error) {
      setError({ general: error.message });
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
        {error.name && <p className="msgError">{error.name}</p>}
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
        {error.price && <p className="msgError">{error.price}</p>}
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
        {error.weight && <p className="msgError">{error.weight}</p>}
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
