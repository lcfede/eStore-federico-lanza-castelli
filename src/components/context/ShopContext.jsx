import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {    

    const [cart, setCart] = useState([]);
    
    const addItem = (producto, qty) => {
        console.log(producto, qty);
        const repeated = isInCart(producto.id);
        if (repeated) {
            repeated.qty += qty;
            setCart([...cart]);
        } else {
            setCart([...cart, {...producto, qty: qty}]);
        }
    }

    const clearItems = () => {
        setCart([]);
    }
    const removeItem = (id) => {
        setCart(cart.filter((x) => x.id !== id));
    }

    const isInCart = (id) => {
        return cart.find(item => item.id === id);
    }

    return (
        <Shop.Provider value={{cart, setCart, addItem, clearItems, removeItem}}>
        {children}
        </Shop.Provider>
    )
}

export default ShopProvider