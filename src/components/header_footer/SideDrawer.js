import React from 'react';
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const SideDrawer = (props) => {
  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={()=>props.onClose(false)}
    
    >
      <List component='nav'>
        <ListItem button onClick ={ ()=> console.log("featured")}
        >
        Events Starts In

        </ListItem>
        <ListItem button onClick ={ ()=> console.log("Venue INFO")}
        >
        Venue INFO

        </ListItem>
        <ListItem button onClick ={ ()=> console.log("Highlights")}
        >
        Highlights

        </ListItem>
        <ListItem button onClick ={ ()=> console.log("Pricing")}
        >
        Pricing

        </ListItem>
        <ListItem button onClick ={ ()=> console.log("Location")}
        >
        Location

        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;