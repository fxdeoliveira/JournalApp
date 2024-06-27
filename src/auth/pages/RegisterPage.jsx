import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const formData = {
    email: 'Fabio@GAMIL.COM',
    password: '1234',
    displayName: 'Fabo',
  }

  const formValidations = {
    displayName: [(value) => value.length >= 2  , 'Name'],
    email: [(value) => value.includes('@') , 'Email'],
    password: [(value) => value.length >= 6  , 'Password'],
  }
  const { formState, displayName, displayNameValid, email, emailValid, password, passwordValid, onInputChange, isFormValid } = useForm(formData, formValidations);


  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };



  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Name'
              value={displayName}
              name="displayName"
              onChange={ onInputChange }
              type="text"
              placeholder="Name"
              fullWidth
              error={!!displayNameValid && formSubmitted}
              helperText= {displayNameValid}
            />
            <TextField
              label="Email"
              value={email}
              name="email"
              onChange={ onInputChange }
              type="text"
              placeholder="email@example.com"
              fullWidth
              error={!!emailValid && formSubmitted}
              helperText= {emailValid}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Password"
              value={password}
              name="password"
              onChange={ onInputChange }
              type="password"
              placeholder="password"
              fullWidth
              error={!!passwordValid && formSubmitted}
              helperText= {passwordValid}
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                New account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Already have account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              SingIn
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
