import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Shop } from './context/ShopContext';

export const CartWidget = () => {
  const {cart} = useContext(Shop);

  return (
    <>
        <IconButton 
          size='large' 
          edge='end' 
          color='inherit' 
          aria-label='logo' 
          className='cart-widget__icon'
          disableRipple
          sx={{
            bgcolor: 'transparent',
            borderRadius: 0,
            ml: 1,
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#f2f2f2"
            }
          }}
        >
            <span className="cart-widget__counter">{cart? cart.length : 0}</span>
            <ShoppingCartIcon />
        </IconButton>
    </>
  )
}
