import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/material/icons/Menu';

const SideDrawer = (props) => {
  return(
    <Drawer
        anchor={'right'}
        open={props.open}
        onClose={() => props.onClose(false)}
        >
          <List component="nav">
            <ListItem Button onClick={() => alert("click")}>
              Name of item
            </ListItem>

          </List>


    </Drawer>
  )
}
export default SideDrawer;