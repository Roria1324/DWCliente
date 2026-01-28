import React from 'react'

const Product = ({id, image_url, name , description, price, weight}) => {
  return (
    <>
      <div key={id} className="product-card">
        <h3>{name}</h3>

        {image_url && (
          <img
            src={image_url}
            alt={name}
            className="product-image"
          />
        )}

        <p className="product-description">
          {description}
        </p>

        <p className="product-price">
          {price.toFixed(2).replace('.', ',')} €
        </p>

        <p className='product-weigth'>
        {weight.toFixed(2).replace('.', ',')} kg
        </p>
      </div>
    </>
  )
}

export default Product