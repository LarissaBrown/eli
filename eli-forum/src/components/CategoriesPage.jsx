import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Image } from 'mui-image'




export default function CategoriesPage() {

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"
        sx={{
          mt: 1,
          paddingTop: 37,
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
            width: '50vw',
            height: '100vh'
          }}
        >
        <Box  sx={{
            display: 'flex',
            flexDirection: 'row'
          }}>
        <Avatar alt="placeholder avatar" src='./src/assets/placeholderAvatar.png' />
        <Image src="./src/assets/eliLogo.png" width="20%" />
            <p>First Name<span> Last Name</span></p>
            <p>Member since: <span>Month</span><span> Year</span></p>
        </Box>
        

        </Box>
      </Container>
    </ThemeProvider>
  )

}