import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import {Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSingIn } from "../../store/auth/thunks";
import { useMemo } from "react";

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status } = useSelector(state => state.auth);

  const isAuthenticating = useMemo(() => status == 'checking', [status]);

  const { email, password, onInputChange, formState } = useForm({
    email: 'Fabio@GAMIL.COM',
    password: '1234',
    
  })

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication(email, password));
  }

  const onGoogleSingIn = () => {
    dispatch(startGoogleSingIn());
  }

  return (
    <AuthLayout title="Login">
    <form onSubmit={onSubmit} >
    <Grid container>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          label="Email"
          type="email"
          placeholder="email@example.com"
              fullWidth
              name="email"
              onChange={onInputChange}
              value={email}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="password"
          fullWidth
              sx={{ mt: 2 }}
              name="password"
              onChange={onInputChange}
              value={password}
        />
      </Grid>
      <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
        <Grid item xs={6}>
          <Button disabled={ isAuthenticating } type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button disabled={ isAuthenticating } onClick={onGoogleSingIn} variant="contained" fullWidth>
            <Google></Google>
            <Typography sx={{ ml: 1 }}>Google</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container
        direction='row'
        justifyContent='end'
      >
        <Link component={ RouterLink } color='inherit' to='/auth/register' >
              New account
            </Link>                  
      </Grid>
    </Grid>
  </form>
    </AuthLayout>
  

     
    
  );
};
