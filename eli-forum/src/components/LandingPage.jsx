import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Image }  from 'mui-image'
import image from "../assets/socialImage.jpg"

export default function LandingPage() {

    const theme = createTheme();

    return(
        <ThemeProvider theme={theme}>
        <Container component="main" 
            maxWidth="xs" 
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
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '50%',
            height: 'auto'
          }}
        >
        <Image src="./src/assets/eliLogo.png" width="30%"/>          
        
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2,
                backgroundColor: "#B86363",
                ':hover': {
                    backgroundColor: "#BDBDBD"
                }
            }}
            onClick={() => {
                alert('clicked');
              }}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2,
                backgroundColor: "#BDBDBD",
                color: "#000000",
                ':hover': {
                    backgroundColor: "#B86363"
                }
            }}
            onClick={() => {
                alert('clicked');
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        </Container>
        </ThemeProvider>
    )

}