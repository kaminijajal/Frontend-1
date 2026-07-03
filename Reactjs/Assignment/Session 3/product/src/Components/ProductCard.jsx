import React from 'react'

function ProductCard({productName,price}) {
  return (
    <div>
        <h2>{productName}</h2>
        <p>{price}</p>
      
    </div>
    
  )
}

export default ProductCard