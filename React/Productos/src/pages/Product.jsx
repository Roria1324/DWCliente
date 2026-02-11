import React from "react";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";
import useSession from "../hooks/useSession";

const Product = ({ id, image_url, name, description, price, weight }) => {
  const { destroyProduct } = useProducts();
  const { sessionStarted } = useSession();

  return (
    <>
      <div key={id} className="product-card">
        <h3>{name}</h3>

        {image_url && (
          <img src={image_url} alt={name} className="product-image" />
        )}

        <p className="product-description">{description}</p>

        <p className="product-price">{price.toFixed(2).replace(".", ",")} €</p>

        <p className="product-weigth">
          {weight.toFixed(2).replace(".", ",")} kg
        </p>

        {sessionStarted && (
          <>
            <button className="delete-btn" onClick={() => destroyProduct(id)}>
              Delete
            </button>

            <Link to={`/createProduct/${id}`}>
              <button>Editar</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
