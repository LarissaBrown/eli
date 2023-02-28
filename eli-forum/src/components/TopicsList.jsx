import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export default function TopicsList() {


  return (
    <Container maxWidth="xs"
      sx={{
        mt: 1,
        paddingTop: 37,
        width: '100vw',
        minHeight: '100vh',
       
      }}>
      <CssBaseline />
    <List sx={{ width: '80%', maxWidth: 260, height: 'auto', bgcolor: '#F9C3C3', marginRight: '10px' }}>
      <ListItem alignItems="flex-start" sx={{ height: '4em', color: '#C27878' }}>
      <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="./src/assets/placeholderAvatar.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Topic 1 Cat 1"
          sx={{ 
            '.MuiListItemText-primary': { 
                fontSize: '24px',
            },
            
            }}
        />  
      </ListItem>
      <Divider component="li" />
    </List>
    
    </Container>
  );
}