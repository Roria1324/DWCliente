import React, { useContext, useEffect } from 'react'
import useProducts from '../hooks/useProducts'
import "./Products.css"

const Products = () => { 

  const {getTable, dataProducts, errorProducts} = useProducts()

  useEffect(() => {
    getTable()
  }, [])


  return (
    <>
    
    <div className="product-container">
      <h1>Products</h1>

      {errorProducts && <p className='error-container' >{errorProducts}</p>}
      <div className="products-grid">
        {dataProducts?.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>

            {product.image_url && (
              <img
                src={product.image_url}
                alt={product.name}
                className="product-image"
              />
            )}

            <p className="product-description">
              {product.description}
            </p>

            <p className="product-price">
              {product.price} €
            </p>

            <p className='product-weigth'>
            {product.weight} kg
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Products