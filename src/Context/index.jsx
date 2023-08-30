import React from 'react'
import {createContext} from 'react';

const cart = createContext()

export const cartProvider = ({children}) => {
    return (
        <cart.provider>
            {children}
        </cart.provider>
    )
}