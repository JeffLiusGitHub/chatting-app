import React from 'react';
import lottie from 'lottie-web';
import {useEffect,useRef} from "react";
import classes from './Loading.module.css'
const Loading =()=>{
    const container = useRef(null)
    useEffect(()=>{
      lottie.loadAnimation({
        container:container.current,
        renderer:'svg',
        loop:true,
        autoplay:true,
        animationData:require('./chat.json')
      })
    },[])

    return( <div className={classes.loading} ref={container}></div>
    )
};
export default Loading;