import React from 'react'
import './index.css';
function ProductDetail({product, setIsOpen}) {
  return (
    <aside className='max-h-[420px] overflow-y-auto product-detail flex flex-col right-2 fixed border border-black rounded-lg bg-white'>
        <div className='grid grid-cols-2'>
          <h2 className='grid justify-items-start font-medium text-xl p-3'>Detail</h2>
          <div className='grid justify-items-end p-3 cursor-pointer flex-col right-0 ml-24' onClick={() => {setIsOpen(false)}}>X</div>
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

    </aside>
  )
}

export default ProductDetail