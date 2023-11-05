import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SideDrawer from "./SideDrawer";


const Header = () => {
  const [drawerOpen,setDrawerOpen] = useState(false)

  const toggleDrawer = (value) =>{
    setDrawerOpen(value)

  }
    
  return (
    <AppBar position ="fixed"
    styles = {{
      backgroundColor:'#2f2f2f',
      boxShadow:'none',
      padding:'10px 0px'

    }}
    >
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
          onClick = {(value) => toggleDrawer(true)}
          >
          
            </MenuIcon>
          </IconButton>
            <SideDrawer
            open={drawerOpen}
            onClose={(value) => toggleDrawer(value)}
            />
          </Toolbar>
    </AppBar> 
  )
  }
  export default Header;