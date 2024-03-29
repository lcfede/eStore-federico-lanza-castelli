import React, { createContext, useEffect, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {    

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('shoppingCart'));
        if (items) {
            setCart(items);
        }
    }, []);

    useEffect(() => {
        if (cart && cart.length > 0)
            localStorage.setItem('shoppingCart', JSON.stringify(cart));
        else
            localStorage.removeItem("shoppingCart");
    }, [cart]);
    
    const addItem = (product, qty) => {
        if (product.qty >= product.stock) return;
        const repeated = isInCart(product.id);
        if (repeated) {
            repeated.qty += qty;
            setCart([...cart]);
        } else {
            setCart([...cart, {...product, qty: qty}]);
        }
    }

    const subtractItem = (product) => {
        const prod = cart.find(item => item.id === product.id);
        if (prod.qty >= 2) {
            prod.qty -= 1;
            setCart([...cart]);
        } else {
            removeItem(product.id);
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

    const totalItems = () => {
        return cart.reduce(function(a, b){
            return a + b['qty'];
        }, 0);    
    }

    const totalAmount = () => {
        return cart.reduce(function(a, b){
            return a + b['qty'] * b['price'];
        }, 0);    
    }

    return (
        <Shop.Provider value={{cart, setCart, addItem, clearItems, removeItem, totalItems, subtractItem, totalAmount}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider