import React, { useContext } from 'react'
import { Shop } from './context/ShopContext';

const Cart = () => {
  const {cart, addItem, clearItems, removeItem} = useContext(Shop);
  return (
    <>
      {
        cart.length ?
          <div>
            <button onClick={() => clearItems()}>Limpiar carrito</button>
            <ul>
              {
                  cart.map((item) => {
                      return(
                          <li key={item.id}>{item.title} 
                            <button
                              onClick={() => removeItem(item.id)}
                            >X</button>
                          </li>
                      )
                  })
              }
            </ul>
          </div>
        : <h4>Cart is empty...</h4>
      }
    </>
  )
}

export default Cart