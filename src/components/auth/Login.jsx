import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { logInWithEmailAndPassword } from "../../services/authService";
import { auth } from "../../firebase/config";
import { Backdrop, CircularProgress, TextField } from "@mui/material";
import { useContext } from "react";
import { Auth } from "../../context/AuthContext";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user} = useContext(Auth);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const login = (event) => {
    event.preventDefault();
    setOpen(true);
    logInWithEmailAndPassword(email, password)
      .then(() => {
        setOpen(false);
      })
  }
  
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
          <button
            type="submit"
            className="login__btn"
            disabled={!email || !password}
          >
            Login
          </button>
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register"><b>Register</b></Link> now.
          </div>
        </div>
      </div>
    </form>
  );
}
export default Login;