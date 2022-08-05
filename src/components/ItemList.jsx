import React from 'react';
import { Item } from './Item';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5)
    }
}))

export const ItemList = ({data, loading}) => {

    const classes = useStyles();

    if (loading) return <p>Loading data...</p>

    return (
        <>
            {
                <div> 
                    {
                        <div className={classes.root}>
                            <Grid
                                container
                                spacing={2}
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                {
                                    data.map((prod) => {
                                        return(
                                            <Item product={prod} key={prod.id} />
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
