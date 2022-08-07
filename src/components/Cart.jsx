import React, { useContext, useState } from 'react'
import CartItem from './CartItem';
import { Shop } from '../context/ShopContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { 
  Backdrop, 
  Button, 
  CircularProgress,
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  IconButton, 
  Slide, 
  Stack,
  TextField, 
  Tooltip } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import {saveOrder} from '../services/orderService';
import { Auth } from '../context/AuthContext';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = () => {
  const {cart, addItem, clearItems, removeItem, subtractItem, totalAmount} = useContext(Shop);
  const [modal, setModal] = useState({open: false, isError: false, title: '', message: ''});
  const [loading, setLoading] = useState(false);
  const { user } = useContext(Auth);
  const navigate = useNavigate();

  const handleClose = () => {
    setModal({open: false, title: '', isError: false, message: ''})
  };

  const customSubmit = (formik) => {
    setModal({open: false, title: '', isError: false, message: ''});
    setLoading(true);

    const payload = {
      name: formik.values.name,
      phone: formik.values.phone,
      email: formik.values.email,
      address: formik.values.address,
      date: new Date(),
      products: [
        ...cart
      ]
    };

    try {
      saveOrder(payload)
        .then((id) => {
          setLoading(false);
          clearItems();
          navigate(`/success/${id}`)
      })
    } catch (error) {
      setLoading(false);
      setModal({
        open: true, 
        title: 'Error',
        isError: true,
        message: 'An error ocurred while purchasing. Please try again.'
      })
    }
  }


  if (!cart.length) return <h3 style={{margin: 30}}>Cart is empty...</h3>;

  return (
    <>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={() => setLoading(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <h1 className='cart__main-title'>Cart</h1>
      <div className='cart__container animate__animated animate__fadeIn'>
        <div className='cart__container-items'>
          <div className='cart__subtitle ml-40'>
            <h2>{cart.length} Product{cart.length > 1 ? 's' : ''} ~ Total: ${totalAmount()}</h2>
            <Stack onClick={() => clearItems()} direction='row'>
              <Tooltip title="Clear cart" placement="left">
                <IconButton 
                  size='large' 
                  edge='start' 
                  color='inherit'
                  disableRipple
                  sx={{
                    bgcolor: 'transparent',
                    borderRadius: 0
                  }}
                ><DeleteIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </div>
          <div className='cart__items'>
            {
              cart.map((item) => {
                  return(
                      <CartItem
                        key={item.id} 
                        item={item}
                        addItem={addItem} 
                        subtractItem={subtractItem} 
                        removeFromCart={removeItem}
                      />
                  )
              })
            }
          </div>
        </div>
        <div className='cart__container-purchase mr-40' >
          <div className='cart__subtitle'>
            <h2>Contact information</h2>
          </div>
          <div className='cart__purchase-form'>
            <Formik
              enableReinitialize
              initialValues={{
                name: "",
                email: "",
                phone: "",
                address: "",
                confirmEmail: ""
              }}

              onSubmit={async (values, { setSubmitting }) => {
                setModal({
                  open: true, 
                  title: 'Confirm purchase',
                  isError: false,
                  message: 'Are you sure you want to continue? Payment will be made immediately.'
                });
              }}

              validationSchema={
                  Yup.object().shape({
                    name: Yup.string().required("Name required"),
                    email: Yup.string().required("Email required").email("Invalid email format"),
                    phone: Yup.string().required("Phone required"),
                    address: Yup.string().required("Address required"),
                    confirmEmail: Yup.string().required("Confirm email required").email("Invalid email format")
                      .when("email", {
                        is: val => (val && val.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                          [Yup.ref("email")],
                          "Both email need to be the same"
                        )
                      })
                  })
              }
            >
            {
              (formik) => {
                return (
                  <Form onSubmit={formik.handleSubmit}>
                    <section className='form-section'>
                      <div className='form-half'>
                        <TextField 
                          fullWidth
                          autoComplete="new-password"
                          name="name" 
                          label="Full name" 
                          variant="outlined"
                          disabled={!user}
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          error={formik.touched.name && Boolean(formik.errors.name)}
                          helperText={formik.touched.name && formik.errors.name} />
                        <TextField 
                          fullWidth
                          autoComplete="new-password"
                          name="phone" 
                          label="Phone" 
                          variant="outlined"
                          disabled={!user}
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          error={formik.touched.phone && Boolean(formik.errors.phone)}
                          helperText={formik.touched.phone && formik.errors.phone} />
                      </div>
                    </section>
                    <section className='form-section'>
                      <div className='form-half'>
                        <TextField 
                          fullWidth
                          autoComplete="new-password"
                          name="email" 
                          label="Email" 
                          variant="outlined"
                          disabled={!user}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          error={formik.touched.email && Boolean(formik.errors.email)}
                          helperText={formik.touched.email && formik.errors.email} /> 
                        <TextField 
                          fullWidth
                          autoComplete="new-password"
                          name="confirmEmail" 
                          label="Confirm email" 
                          variant="outlined"
                          disabled={!user}
                          value={formik.values.confirmEmail}
                          onChange={formik.handleChange}
                          error={formik.touched.confirmEmail && Boolean(formik.errors.confirmEmail)}
                          helperText={formik.touched.confirmEmail && formik.errors.confirmEmail}/> 
                      </div>
                    </section>
                    <section className='form-section'>
                      <div className='form-half'>
                        <TextField 
                          fullWidth
                          autoComplete="new-password"
                          name="address" 
                          label="Full address" 
                          variant="outlined"
                          disabled={!user}
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          error={formik.touched.address && Boolean(formik.errors.address)}
                          helperText={formik.touched.address && formik.errors.address} /> 
                      </div>
                    </section>
                    <section style={{marginTop: 30}}>
                      <Button
                        size="large" 
                        color={user ? "primary" : "secondary"} 
                        variant="contained" 
                        fullWidth 
                        disabled={!user}
                        type="submit">{user ? "Confirm purchase" : "You must login to purchase"}</Button>
                    </section>

                    <div>
                      <Dialog
                        open={modal.open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                      >
                        <DialogTitle>{modal.title}</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-slide-description">
                            {modal.message}
                          </DialogContentText>
                        </DialogContent>
                        {
                          !modal.isError 
                            ? 
                              <DialogActions>
                                <Button onClick={handleClose}> Disagree </Button>
                                <Button onClick={() => customSubmit(formik)}> Agree </Button>
                              </DialogActions>
                            :
                              <DialogActions>
                              <Button onClick={handleClose}> Close </Button>
                              </DialogActions>
                        }
                      </Dialog>
                    </div>
                  </Form>
                )
              }
            }
          </Formik>

          </div>
        </div>
      </div>
    </>
  )
}

export default Cart