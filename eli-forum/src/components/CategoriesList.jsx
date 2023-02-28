import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopicsPage from './TopicsPage'


export default function CategoriesList() {


  return (
    <Container component="main" maxWidth="xs"
      sx={{
        mt: 1,
        paddingTop: 37,
        width: '100vw',
        minHeight: '100vh',
       
      }}>
      <CssBaseline />
    <List sx={{ width: '100%', maxWidth: 360, height: 'auto', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start" sx={{ height: '5em' }}>
        <ListItemText
          sx={{ 
            '.MuiListItemText-primary': { 
                fontSize: '36px',
            },
            
            }}
        />  
        <Link to="/topics" style={{padding: 5}}>
            Category 1
        </Link>
      </ListItem>
      <Divider component="li" />
    </List>
    <TopicsPage /> 
    <Routes>
        <Route path="/topics" element={<TopicsPage />}/>
      </Routes>
    </Container>
  );
}