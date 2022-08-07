import React from 'react';
import { Item } from './Item';
import { Box, Grid, LinearProgress } from '@mui/material';

export const ItemList = ({data, loading}) => {

    if (loading) 
      return (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )

    return (
        <>
            {
                <div> 
                    {
                        <div>
                            <Grid
                                container
                                spacing={3}
                                direction="row"
                                justify="center"
                                alignItems="center"
                                padding={10}
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
