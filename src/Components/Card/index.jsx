import React from 'react'

function Card() {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg border-2'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 mb-2 ml-2 p-1 left-0 bg-white/60 rounded-lg text-black text-sm'>Electronics</span>
            <img className='w-full h-full object-cover' src='https://images.pexels.com/photos/5726030/pexels-photo-5726030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='HeadPhones'/>
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 font-black'>
                +
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light m-2'>HeadPhones</span>
            <span className='text-md font-black m-2'>$3000</span>
        </p>
    </div>
  )
}

export default Card