import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';
import { ItemCount } from './ItemCount';

const useStyles = makeStyles(theme => ({
    content: {
        textAlign: "center"
    }
}))

export const Item = ({product}) => {

    const {id, title, price, category, stock = 10, image} = product;
    const classes = useStyles();

    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/item/${product.id}`);
    }

    return (
        <Grid item xs={12} sm={6} md={3} key={id}>
            <Card sx={{ maxWidth: 345 }} className="animate__animated animate__fadeIn">
                <Link to={`/item/${product.id}`}>
                    <CardActionArea style={{display: 'inline-block'}}>
                        <img src={image} height={350} width={300} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className={classes.content}>
                                {title}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" className={classes.content}>
                                ${price}
                            </Typography>
                            <Typography paragraph className={classes.content}>
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
