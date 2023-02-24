import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Image6 from '../../static/Image6.jpg'
import React from 'react'
import Card from '../card/Card'


const Rightbar = () => {
  return (
    <Box>
        <Typography variant='h5' bgcolor='black' color='white' align='center'>Popular Posts</Typography>
   
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-end">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={Image6} />
      </ListItemAvatar>
      <ListItemText
        secondary={
          "- I am the best in the world when it comes to this nigger!"
        }
      />
    </ListItem>
    <ListItem alignItems="flex-end">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={Image6} />
      </ListItemAvatar>
      <ListItemText
        secondary={
          "- I am the best in the world when it comes to this nigger!"
        }
      />
    </ListItem>
    <ListItem alignItems="flex-end">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={Image6} />
      </ListItemAvatar>
      <ListItemText
        secondary={
          "- I am the best in the world when it comes to this nigger!"
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
  </List>

  <Typography align="center" bgcolor={"black"} color="white">Contact Us</Typography>
  < Card cardImage={Image6}/>
  </Box>


    
  )
}

export default Rightbar