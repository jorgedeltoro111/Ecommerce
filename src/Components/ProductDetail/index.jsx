import React from 'react'
import './index.css';
function ProductDetail({product}) {
  console.log(product.id);
  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
        <h2 className='grid justify-items-start fixed font-medium text-xl p-3'>Detail</h2>
        <div className='grid justify-items-end p-3 cursor-pointer flex-col fixed right-0'>X</div>
        <figure className='pt-3'>
          <img className='p-12 max-h-72' src={product.image} alt={product.title} />
        </figure>

    </aside>
  )
}

export default ProductDetail