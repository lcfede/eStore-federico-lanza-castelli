import { AppBar, Toolbar, IconButton, Typography, Button, Stack, Tooltip, } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import { getCategoriesAll } from '../services/categoryService';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Auth } from '../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../services/authService';
  
  export const MuiNavbar = () => {

    const [categories, setCategories] = useState([]);
    const {user, name} = useContext(Auth);

    useEffect(() => {
      getCategoriesAll()
        .then((items) => {
          setCategories(items);
      });
    }, []);
    
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
              <Button color='inherit'>Nike 360°</Button>
            </Link>
            {
              categories.map((category) => {
                return (
                  <Link to={`/category/${category.key}`} key={category.id}>
                    <Button color='inherit'>{category.key}</Button>
                  </Link>
                )
              })
            }
            {
              !user && 
                <>
                  <Link to="/login">
                    <Button color='inherit' variant="outlined">Login</Button>
                  </Link>
                  <Link to="/register">
                    <Button color='info' variant="contained">Sign up</Button>
                  </Link>
                </>
            }
          </Stack>
          {
            user &&
            <>
              <Tooltip title="Profile">
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
                    },
                    fontSize: '13px',
                  }}
                  onClick={() => console.log("TODO: Dev user profile page")}
                ><span style={{marginRight: '5px'}}>{name}</span><PersonIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Logout">
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
                  onClick={() => logout()}
                ><LogoutIcon />
                </IconButton>
              </Tooltip>
            </>
          }
          <Tooltip title="View cart">
            <Link to="/cart">
              <CartWidget/>
            </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
    )
  }