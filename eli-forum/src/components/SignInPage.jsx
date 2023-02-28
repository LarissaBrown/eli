import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Image }  from 'mui-image';
import image from "../assets/socialImage.jpg";
import SignUpPage from "./SignUpPage";
import CategoriesPage from './CategoriesPage';



export default function SignInPage() {

    const theme = createTheme();

    return(
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs"
          sx={{ 
            mt: 1, 
            paddingTop: 37,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100vw',
            minHeight: '100vh',
            }}>
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: '#FBE2E2',
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '60%',
            height: 'auto'
          }}
        >
        <Image src="./src/assets/eliLogo.png" width="30%"/>            
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              id="email2"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password2"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2,
                width: '50%'
              }}
            >
              <Link to="/categories" style={{padding: 5}}>
                Sign In
              </Link>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              <Link to="/signup" style={{padding: 5}}>
                {"Don't have an account? Sign Up"}
              </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
        <Routes>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path="/categories" element={<CategoriesPage />}/>
        </Routes>
        </ThemeProvider>
    )

}