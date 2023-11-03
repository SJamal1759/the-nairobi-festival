import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { getValue } from "@testing-library/user-event/dist/utils";
import MenuIcon from '@material-ui/icons/Menu';




const Header = () => {
  const [drawerOpen,setDrawerOpen] = useState(false)

  const toggleDrawer = (getValue) =>{
    setDrawerOpen(getValue)

  }
    
  
  return (
    <AppBar position ="fixed"
    styles = {{
      backgroundColor:'#2f2f2f',
      boxShadow:'none',
      padding:'10px 0px'

    }}>
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo">
                The Venue
            </div>
            <div className="header_logo_title">
              MUSICAL EVENTS
            </div>
          </div>
          <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => toggleDrawer(true)}>
            <MenuIcon/>

          </IconButton>
        </Toolbar>
    </AppBar> 
  )
}
export default Header;