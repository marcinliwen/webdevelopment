import React from 'react';
import './Menuburger.css'

const clickHandler =()=>{
    console.log("this is menu")
}
const  Menuburger =(props)=>{
    console.log('menuburger props: ' + props.onCLickMe)
    return(
        <a className="burder-menu" onClick={props.onCLickMe}>
            <span></span>
            <span></span>
            <span></span>
        </a>
    )
}

export default Menuburger;