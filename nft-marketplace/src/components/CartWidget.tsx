import React from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
  let counter = 1;
  return (
    <>
        <IconButton 
          size='large' 
          edge='end' 
          color='inherit' 
          aria-label='logo' 
          className='cartwidget__icon'
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
            <span className="cartwidget__counter">{counter}</span>
            <ShoppingCartIcon />
        </IconButton>
    </>
  )
}
