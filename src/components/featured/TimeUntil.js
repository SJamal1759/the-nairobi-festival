import React, { useState,useEffect,useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

const TimeUntil = () =>  {

    const renderItem = (time,value) => (
        <div className='countdown_item'>
        <div className='countdown_time'>
            {time}
        </div>
        <div className='countdown-tag'>
            {value}
        </div>
        </div>
    )
    const getTimeUntil = () =>{

    }

       useEffect (() => {
    setInterval(() => getTimeUntil (),1000)
        },[getTimeUntil])    
        return (
        <Slide left delay = {1000}>
        <div className='countdown_wrapper'>
            <div className='countdown_top'>
                Events starts in
            </div>
            <div className='countdown_bottom'>
                   
                        {renderItem(27,'Days')}
                        {renderItem(24,'Hours')}
                        {renderItem(47,'Mins')}
                        {renderItem(16,'Secs')}
            </div>
        </div>

            
        </Slide>
    )
   
}

export default TimeUntil;