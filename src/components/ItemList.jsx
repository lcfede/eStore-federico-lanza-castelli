import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { Item } from './Item';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5)
    }
}))

export const ItemList = () => {

    const url = 'https://fakestoreapi.com/products';
    const { data, loading, error } = useFetch(url);
    const classes = useStyles();

    return (
        <>
            {
                loading 
                ? <p>Loading NFT's</p>
                : <div> 
                    {
                        error
                        ? <p>{error}</p>
                        : <div className={classes.root}>
                            <Grid
                                container
                                spacing={5}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                {
                                    data.map((prod) => {
                                        return(
                                            <Item product={prod} />
                                        )
                                    })
                                }
                            </Grid>
                            
                        </div>
                    }
                </div>
            }
        </>
    )
}
