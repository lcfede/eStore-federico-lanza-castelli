import React, { useState } from 'react';
import { Divider, Grid, Typography, Button, Box } from '@mui/material';
import { ItemCount } from './ItemCount';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ data, loading, error }) => {

  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      {
        loading 
        ? <p>Loading NFT</p>
        : <Grid container spacing={1} style={{maxWidth: 1100, margin: "0 auto", marginTop: 60}}>
            <Grid item sm={6}>
              <Grid container>
                <img src={data?.images[0]} height={450} width={500} className='item-detail__img' alt=""/>
              </Grid>
            </Grid>
            <Grid item sm={6}>
              <Grid container direction="column" style={{height: '100%'}}>
                <Typography variant="subtitle1">{data?.category.name}</Typography>
                <Divider />
                <Box mt={4}>
                  <Typography variant="h4" mb={2}>{data.title}</Typography>
                  <Typography variant="subtitle1" mb={2}>{data?.description}</Typography>
                  <Typography variant="h5" mb={3}>${data.price}</Typography>
                </Box>
                {
                  !qty 
                    ? <Box>
                        <ItemCount stock={10} key={data?.id} onAdd={setQty} product={data}/>
                      </Box>
                    : <Box>
                        <Button 
                          variant="contained" 
                          color="inherit" 
                          onClick={() => navigate(-1)} 
                          style={{marginTop: 10, marginBottom: 10, marginRight: 10, width: 250}}>Continue shopping</Button>
                        <Button 
                          variant="contained" 
                          color="primary" 
                          style={{marginTop: 10, marginBottom: 10, marginLeft: 10, width: 150}}
                          onClick={() => navigate('/cart')}>Checkout</Button>
                      </Box> 
                }
              </Grid>
            </Grid>
          </Grid>
      }
    </>
  )
}

export default ItemDetail