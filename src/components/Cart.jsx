import React, { useContext, useState } from 'react'
import CartItem from './CartItem';
import { Shop } from './context/ShopContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide, Stack, TextField, Tooltip } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = () => {
  const {cart, addItem, clearItems, removeItem, subtractItem, totalAmount} = useContext(Shop);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const customSubmit = (formik) => {
    setOpen(false);
    formik.setFieldValue("name", "");
    formik.setFieldValue("email", "");
    formik.setFieldValue("phone", "");
    formik.setFieldValue("address", "");

    const payload = {
      name: formik.values.name,
      phone: formik.values.phone,
      email: formik.values.email,
      address: formik.values.address,
      items: [
        ...cart
      ]
    };
    //call Api and redirect to /success/id
    clearItems();
    navigate("/success");
  }

  if (!cart.length) return <h3 style={{margin: 30}}>Cart is empty...</h3>;

  return (
    <>
      {
          <>
            <h1 className='cart__main-title'>Cart</h1>
            <div className='cart__container'>
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
              <div className='cart__container-purchase mr-40'>
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
                      address: ""
                    }}

                    onSubmit={async (values, { setSubmitting }) => {
                      setOpen(true);
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
                                name="name" 
                                label="Full name" 
                                variant="outlined"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name} />
                              <TextField 
                                fullWidth
                                name="phone" 
                                label="Phone" 
                                variant="outlined"
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
                                name="email" 
                                label="Email" 
                                variant="outlined"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email} /> 
                              <TextField 
                                fullWidth
                                name="confirmEmail" 
                                label="Confirm email" 
                                variant="outlined"
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
                                name="address" 
                                label="Full address" 
                                variant="outlined"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address} /> 
                            </div>
                          </section>
                          <section style={{marginTop: 30}}>
                            <Button size="large" color="primary" variant="contained" fullWidth type="submit">
                              Confirm purchase
                            </Button>
                          </section>

                          <div>
                            <Dialog
                              open={open}
                              TransitionComponent={Transition}
                              keepMounted
                              onClose={handleClose}
                              aria-describedby="alert-dialog-slide-description"
                            >
                              <DialogTitle>{"Confirm purchase"}</DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                  Are you sure you want to continue? Payment will be made immediately.
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose}>Disagree</Button>
                                <Button onClick={() => customSubmit(formik)}>Agree</Button>
                              </DialogActions>
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
      }
    </>
  )
}

export default Cart