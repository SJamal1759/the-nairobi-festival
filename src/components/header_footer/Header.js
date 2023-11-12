import React, { Component } from 'react';
import { AppBar, IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '@mui/material';


class Header extends Component {
  render() {
    return (
      <AppBar
      position="fixed"
      style={{
        backgroundColor:'#2f2f2f',
        boxShadow:'none',
        padding:'10px 0px'
      }}
      >
        <Toolbar>
          <div className='header_logo'>
            <div className='font_righteous header_logo_venue'>The Venue</div>
            <div className='header_logo_title'>Musical Events</div>

          </div>
          <IconButton 
            aria-label='Menu'
            color='inherit'
            onClick={()=>console.log('open')}
          >
        

            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;