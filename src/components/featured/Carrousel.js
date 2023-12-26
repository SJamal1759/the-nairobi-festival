import React, { useState} from 'react';
import './carrousel.css';
import { imagesss } from '../featured/Helper/CarrouselData';
import { ArrowBackIos } from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrousel = () => {
  const [currImg,setCurrImg] = useState(0);

    return(
        <div className='carousel'>
      <div className='carousel-inner' 
      style={{backgroundImage:`url(${imagesss[currImg].img})`}}>

      <div className='left'
      onClick={() => {
        currImg > 0 && setCurrImg(currImg -1);
      }}>
        <ArrowBackIos style={{fontSize:30}}/>
      </div>
      <div className='center'></div>
      <div className='right'
      onClick={() => {
        currImg <imagesss.length -1 &&setCurrImg(currImg +1);
      }}>
        <ArrowForwardIos style={{fontSize:30}}/>
      </div>
        
      </div>


    </div>
    )

}

export default Carrousel;