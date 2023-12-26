import React, { Component } from 'react'
import './resources/styles.css'
import Header from './components/header_footer/Header';
// import { Height } from '@mui/icons-material';
import Featured from './components/featured';
import Carrousel from './components/featured/Carrousel'

class App extends Component {
  render() {
    return (
      <div className='App' style={{height:'1500px'}}>
        <Header/>
        <Featured/>
        <Carrousel/>
      </div>
    )
  }
}
export default App; 
