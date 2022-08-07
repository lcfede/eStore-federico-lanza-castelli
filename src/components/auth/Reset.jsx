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
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import { sendPasswordReset } from "../../services/authService";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Reset = () => {
  const [email, setEmail] = useState("");
  const [user, error] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({result: "", msg: ""});
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const resetPassword = () => {
    setLoading(true);
    sendPasswordReset(email)
      .then((data) => {
        setLoading(false);
        setAlert(data);
      })
  }

  const handleClose = () => {
    if (alert.result === "success") navigate("/login");
    setAlert({result: "", msg: ""});
  }

  return (
    <div className="reset">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={() => console.log()}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="reset__container">
        <h2>Reset password</h2>
        <TextField
            fullWidth
            autoComplete="new-password"
            name="email" 
            label="Email" 
            variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => resetPassword()}
        >
          Send password reset email
        </Button>
        <div>
          Don't have an account? <Link to="/register"><b>Register</b></Link> now.
        </div>
      </div>

      <div>
        <Dialog
          open={alert.result}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{alert.result === "success" ? "Password reset" : "An error ocurred"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {alert.msg}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>

    </div>
  );
}
export default Reset;