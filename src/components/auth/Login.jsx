import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "../../services/authService";
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
import { useContext } from "react";
import { Auth } from "../../context/AuthContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user} = useContext(Auth);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState({open: false, msg: ""});
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  });

  const login = (event) => {
    event.preventDefault();
    setOpen(true);
    logInWithEmailAndPassword(email, password)
      .then((err) => {
        setOpen(false);
        if (err) {
          setError({open: true, msg: err});
        }
      })
  }

  const handleClose = () => {
    setError({open: false, msg: ""});
  };
  
  return (
    <form onSubmit={login}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => console.log()}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="login">
        <div className="login__container">
          <h2>Login</h2>
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
            type="submit"
            variant="contained"
            disabled={!email || !password}
          >
            Login
          </Button>
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register"><b>Register</b></Link> now.
          </div>
        </div>
      </div>
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
    </form>
  );
}
export default Login;