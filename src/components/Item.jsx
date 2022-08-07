import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export const Item = ({product}) => {

    const {id, title, price, stock = 10, image} = product;

    return (
        <Grid item xs={12} sm={6} md={3} key={id} justifyItems='center'>
            <Card className="animate__animated animate__fadeIn">
                <Link to={`/item/${product.id}`}>
                    <CardActionArea style={{display: 'inline-block'}}>
                        <img src={image} height={350} alt="" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '1.35rem', textAlign: 'center'}}>
                                {title}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{textAlign: 'center'}}>
                                ${price}
                            </Typography>
                            <Typography paragraph sx={{textAlign: 'center'}}>
                                Stock disponible: {stock}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                {/* <CardActions>
                    <ItemCount stock={10} key={product.id} onAdd={() => alert('product added')}/>
                </CardActions> */}
            </Card>
        </Grid>
    )
}
