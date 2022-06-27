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

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 200,
    }
}))

export const Item = ({product}) => {

    const {id, title, price, category, stock = 10, image} = product;
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={3} key={id} className={classes.grid}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        className={classes.media}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            ${price}
                        </Typography>
                        <Typography paragraph>
                            Stock disponible: {stock}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Tooltip title="Add to cart">
                        <IconButton aria-label="share">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="View details">
                        <IconButton aria-label="share">
                            <VisibilityIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Share to friends">
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </Grid>
    )
}
