import React from 'react';
import { Slider } from '@mui/material';

const Carousel = () => {
    const settings ={
      dots:false,
      infinite:true,
      autoplay:true,
      speed: 500
    }
  return (
    <div className='carrousel_wrapper'
    styles={{
      background:'red',
      height:'${window.innerHeight}px',
      overflow:'hidden'
    }}>
      
    </div>
  );
};

export default Carousel;