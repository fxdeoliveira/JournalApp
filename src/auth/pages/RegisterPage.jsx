import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Name" type="text" placeholder="name" fullWidth />
            <TextField
              label="Email"
              type="email"
              placeholder="email@example.com"
              fullWidth
              sx={{ mt: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth>
                New account
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth>
                <Google></Google>
                <Typography sx={{ ml: 1 }}>Google</Typography>
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
