import React from 'react'
import {createContext, useState} from 'react';

export const cartContext = createContext()

export const CartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    return (
        <cartContext.Provider 
            value={
                {
                    count,
                    setCount,
                    cartProducts,
                    setCartProducts
                }
            }
        >
            {children}
        </cartContext.Provider>
    )
}
