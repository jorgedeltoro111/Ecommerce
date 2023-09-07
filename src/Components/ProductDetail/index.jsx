import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import './index.css';
function ProductDetail({product, setIsOpen}) {
  return (
    <aside className='max-h-[420px] overflow-y-auto product-detail flex flex-col right-2 fixed border border-black rounded-lg bg-white'>
        <div className='grid grid-cols-2'>
          <h2 className='grid justify-items-start font-medium text-xl p-3'>Detail</h2>
          <div className='grid justify-items-end p-3 cursor-pointer flex-col right-0 ml-24' onClick={() => {setIsOpen(false)}}><XMarkIcon className='h-6 w-6 text-black'/></div>
        </div>
        <div className='max-h-48'>
          <img className='max-h-48 p-5' src={product.image} alt={product.title} />
        </div>
        <div className='text-lg font-semibold p-2'>{product.title}</div>
        <div className='p-2'>
          <h4 className='font-light text-sm text-justify'>
            {product.description}
          </h4>
        </div>
        <div className='p-2 font-semibold bg-slate-300'>
          <h4>Category: {product.category}</h4>
          <h3>Precio: ${product.price}</h3>
        </div>
    </aside>
  )
}

export default ProductDetail