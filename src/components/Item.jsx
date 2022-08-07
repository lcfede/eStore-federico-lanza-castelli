import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    content: {
        textAlign: "center"
    }
}))

export const Item = ({product}) => {

    const {id, title, price, stock = 10, image} = product;
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={3} key={id} justifyItems='center'>
            <Card className="animate__animated animate__fadeIn">
                <Link to={`/item/${product.id}`}>
                    <CardActionArea style={{display: 'inline-block'}}>
                        <img src={image} height={350} alt="" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className={classes.content} sx={{fontSize: '1.35rem'}}>
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
