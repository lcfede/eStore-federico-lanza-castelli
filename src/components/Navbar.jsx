import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Stack,
    Menu,
    MenuItem
  } from '@mui/material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
  
  export const MuiNavbar = () => {
    // const [anchorEl, setAnchorEl] = useState(null)
    // const open = Boolean(anchorEl)
    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget)
    // }
    // const handleClose = () => {
    //   setAnchorEl(null)
    // }
    return (
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <IconButton 
            size='large' 
            edge='start' 
            color='inherit' 
            aria-label='logo' 
            disableRipple
            sx={{
              ml: 1,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}>
            <Link to="/">
              <CurrencyBitcoinIcon fontSize="large" color='warning'/>
            </Link>
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} className="navbar__typography" align='left'>
            <span className="navbar__title">NFT Marketplace</span>
          </Typography>
          <Stack direction='row' spacing={2} className="navbar__items">
            <Link to="/">
              <Button color='inherit'>Home</Button>
            </Link>
            <Link to="/category/jewelery">
              <Button color='inherit'>Art</Button>
            </Link>
            <Link to="/category/electronics">
              <Button color='inherit'>Collectibles</Button>
            </Link>
            <Link to="/category/men's clothing">
              <Button color='inherit'>Photography</Button>
            </Link>
            <Link to="/category/women's clothing">
              <Button color='inherit'>Sports</Button>
            </Link>

            {/* <Button
              color='inherit'
              id='resources-button'
              aria-controls={open ? 'resources-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}>
              Explore
            </Button> */}
            {/* <Link to="/about">
              <Button color='inherit'>About</Button>
            </Link> */}
            <Link to="/login">
              <Button color='inherit' variant="outlined">Login</Button>
            </Link>
            <Link to="/signup">
              <Button color='info' variant="contained">Sign up</Button>
            </Link>
            
          </Stack>
          {/* <Menu
            id='resources-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            MenuListProps={{
              'aria-labelledby': 'resources-button'
            }}>
            <MenuItem onClick={handleClose}>
              <Link to="/">All NFTs</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/category/jewelery">Art</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/category/electronics">Collectibles</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/category/men's clothing">Photography</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <Link to="/category/women's clothing">Sports</Link>  
            </MenuItem>
          </Menu> */}
          <IconButton 
            size='large' 
            edge='start' 
            color='inherit'
            disableRipple
            sx={{
              bgcolor: 'transparent',
              borderRadius: 0,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#f2f2f2"
              }
            }}
          >
            <PersonIcon />
          </IconButton>
          <CartWidget />
        </Toolbar>
      </AppBar>
    )
  }