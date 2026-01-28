import React, { useContext, useEffect } from 'react'
import useProducts from '../hooks/useProducts'
import "./Products.css"
import Product from './Product'

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
          <Product 
            key={product.id}
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
  )
}

export default Products