import { AppBar, Toolbar, IconButton, Typography, Button, Stack, } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
  
  export const MuiNavbar = () => {
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
              <StorefrontIcon fontSize="large" color='warning'/>
            </Link>
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} className="navbar__typography" align='left'>
            <span className="navbar__title">E-store</span>
          </Typography>
          <Stack direction='row' spacing={2} className="navbar__items">
            <Link to="/">
              <Button color='inherit'>All</Button>
            </Link>
            <Link to="/nikes">
              <Button color='inherit'>Nikes</Button>
            </Link>
            <Link to="/category/Clothes">
              <Button color='inherit'>Clothes</Button>
            </Link>
            <Link to="/category/Shoes">
              <Button color='inherit'>Shoes</Button>
            </Link>
            <Link to="/category/Electronics">
              <Button color='inherit'>Electronics</Button>
            </Link>
            <Link to="/category/Furniture">
              <Button color='inherit'>Furniture</Button>
            </Link>
            <Link to="/login">
              <Button color='inherit' variant="outlined">Login</Button>
            </Link>
            <Link to="/signup">
              <Button color='info' variant="contained">Sign up</Button>
            </Link>
          </Stack>
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
          ><PersonIcon />
          </IconButton>
          <Link to="/cart"><CartWidget/></Link>
        </Toolbar>
      </AppBar>
    )
  }