import React from 'react'
import {NavLink} from 'react-router-dom';
const NavBar = () => {
    const activeStyle = 'underline underline-offset-4';
    return(//w-full significa que tome el width en todo lo ancho
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>{/*Aqui va la parte de la izquierda del navbar */}
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopper
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className = {({isActive}) => isActive ? activeStyle : undefined}    
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furnitures'
                        className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        className = {({isActive}) => isActive ? activeStyle : undefined}    
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>{/*Aqui va la parte de la derecha del navbar */}
                <li>
                    <NavLink 
                        to='/my-orders'
                        className = {({isActive}) => isActive ? activeStyle : undefined}    
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className = {({isActive}) => isActive ? activeStyle : undefined}    
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sing-in'
                        className = {({isActive}) => isActive ? activeStyle : undefined}    
                    >
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    );
}

export default NavBar