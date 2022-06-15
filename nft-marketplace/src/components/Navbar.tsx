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
  import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  import { useState } from 'react'
  
  export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
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
            <CurrencyBitcoinIcon fontSize="large" color='warning'/>
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} className="navbar__typography" align='left'>
            <span className="navbar__title">NFT Marketplace</span>
          </Typography>
          <Stack direction='row' spacing={2} className="navbar__items">
            <Button color='inherit'>Marketplace</Button>
            <Button
              color='inherit'
              id='resources-button'
              aria-controls={open ? 'resources-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}>
              Explore
            </Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit' variant="outlined">Login</Button>
            <Button color='info' variant="contained">Sign up</Button>
          </Stack>
          <Menu
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
            <MenuItem onClick={handleClose}>All NFTs</MenuItem>
            <MenuItem onClick={handleClose}>Art</MenuItem>
            <MenuItem onClick={handleClose}>Collectibles</MenuItem>
            <MenuItem onClick={handleClose}>Domain names</MenuItem>
            <MenuItem onClick={handleClose}>Music</MenuItem>
            <MenuItem onClick={handleClose}>Photography</MenuItem>
            <MenuItem onClick={handleClose}>Sports</MenuItem>
            <MenuItem onClick={handleClose}>Trading cards</MenuItem>
          </Menu>
          <IconButton size='large' edge='end' color='inherit' aria-label='logo' className='navbar__cart'>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }