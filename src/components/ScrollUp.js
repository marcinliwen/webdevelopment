import React ,{ useState, useEffect }from 'react';
import './ScrollUp.css'
import { useTheme } from "@material-ui/core/styles"
import scrollTo from 'gatsby-plugin-smoothscroll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



const  ScrollUp =({showBelow})=>{
    const isDarkTheme = useTheme().palette.type === "dark"

    const [show, setShow] = useState(showBelow ? false : true)
    
    const handleScroll = () => {
        //console.log(window.pageYOffset, ">" , showBelow )
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }
useEffect(()=>{
    if(showBelow){
        window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
    }
})
    return(
        <button onClick={()=>scrollTo('#hero-home')} className={`scroll-up ${isDarkTheme ? 'dark' :''} ${show? 'show':''}`} >
                <ArrowUpwardIcon />
        </button>
    )
}

export default ScrollUp;