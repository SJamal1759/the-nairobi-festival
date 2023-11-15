import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from '@mui/material/Slider';

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';


const Carousel = () => {
    const settings ={
      dots: false,
      infinite: true,
      autoplay:true,
      speed: 500
      
    }
  return (
    <div className='carrousel_wrapper'
    styles={{
      background:'red',
      height:`${window.innerHeight}px`,
      overflow:'hidden'
    }}>
          
      
    </div>
  );
};

export default Carousel;