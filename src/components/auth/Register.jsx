import { 
  Backdrop, 
  Button, 
  CircularProgress,
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Slide, 
  TextField } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { registerWithEmailAndPassword } from "../../services/authService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState({open: false, msg: ""});
  const navigate = useNavigate();
  
  const register = (e) => {
    e.preventDefault();
    if (!name) alert("Please enter name");
    setOpen(true);
    registerWithEmailAndPassword(name, email, password)
      .then((err) => {
        setOpen(false);
        if (err) {
          setError({open: true, msg: err});
        }
      })
  };

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  });

  const handleClose = () => {
    setError({open: false, msg: ""});
  };

  return (
    <>
      <form onSubmit={register}>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={() => console.log()}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

        <div className="register">
          <div className="register__container">
            <h2>Create user</h2>
            <TextField
                fullWidth
                autoComplete="new-password"
                name="fullName" 
                label="Full name" 
                variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              autoComplete="new-password"
              name="email" 
              label="Email" 
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              type="password"
              autoComplete="new-password"
              name="password" 
              label="Password" 
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={register}>
              Register
            </Button>
            <div>
              Already have an account? <Link to="/login"><b>Login</b></Link> now.
            </div>
          </div>
        </div>
      </form>
      <div>
        <Dialog
          open={error.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>An error ocurred</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {error.msg}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
export default Register;