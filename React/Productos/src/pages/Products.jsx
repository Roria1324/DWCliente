import React, { useContext } from 'react'
import SupabaseProvider from '../context/SupabaseProvider'

const Products = () => {

  const {getData} = useContext(SupabaseProvider);
  

  return (
    <div className='product-container'>

      </div>
  )
}

export default Products