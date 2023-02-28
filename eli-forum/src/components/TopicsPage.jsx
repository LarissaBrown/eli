import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopicsList from './TopicsList';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function TopicsPage() {

  return (
      <Container maxWidth="xs"
          sx={{
              mt: 1,
              width: '40vw',
              backgroundColor: '#C27878',
              position: 'absolute',
              top: '28.1%',
              left: '85%',
              '.MuiContainer-root':{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                paddingTop: '30px',
                paddingLeft: '7px',
                paddingBottom: '20px',
                minHeight: 'auto'

              }

          }}>
        <h1 style={{ color: 'white', fontSize: '30px'}}>Category Title</h1>
        <Button
              type="submit"
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2,
                width: 'auto',
                backgroundColor: 'white',
                color:'black'

              }}
              onClick={() => {
                alert('clicked');
              }}
            >
              Add a New Topic
            </Button>
        <Box>
        <TopicsList />
        </Box>
        <CssBaseline />
      </Container>
  )

}