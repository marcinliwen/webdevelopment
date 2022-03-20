import React from 'react';
import './Menuburger.css'
import { useTheme } from "@material-ui/core/styles"


const clickHandler =()=>{
    //console.log("this is menu")
}


const  Menuburger =(props)=>{
    const isDarkTheme = useTheme().palette.type === "dark"

    //console.log('menuburger: ' + isDarkTheme)
    return(
        <a className={`burder-menu ${isDarkTheme ? 'dark' :''}`} onClick={props.onCLickMe}>
            <span></span>
            <span></span>
            <span></span>
        </a>
    )
}

export default Menuburger;