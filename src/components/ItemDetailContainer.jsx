import React, { useEffect, useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, LinearProgress, Slide } from '@mui/material';
import ItemDetail from './ItemDetail';
import { useNavigate, useParams } from 'react-router-dom';
import {getProductById} from '../services/productService';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

const ItemDetailContainer = () => {

    const {id} = useParams(); 
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        navigate('/');
    }

    useEffect(() => {
        getProductById(id, setLoading)
            .then((data) => {
                if (data && !data.id) {
                    setOpen(true);
                    return;
                }
                setProduct(data);
            })
    }, [id])
    
    if (loading) 
      return (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )
    if(open) 
        return (
            <div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Information"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        The product doest not exist.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => handleClose()}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )

    return (
        <>
            <ItemDetail data={product} loading={loading}/>
        </>
    )
}

export default ItemDetailContainer