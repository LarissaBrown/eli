import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CategoriesList from './CategoriesList'
import CssBaseline from '@mui/material/CssBaseline';
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
          width: '100vw',
          minHeight: '100vh',
          position: 'relative',
          '.MuiContainer-root':{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            margin:0,
            padding:0,
          }
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
        </Box>
        <CategoriesList />
        </Box>
      </Container>

    </ThemeProvider>
  )

}