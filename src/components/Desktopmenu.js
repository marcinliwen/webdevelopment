import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Switch from "@material-ui/core/Switch"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Box from "@material-ui/core/Box"
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MobileMenu from "./MobileMenu"

const SwitchStyle = {
  position: "fixed",
  top: "15px",
  right: "15px",
}

function getIdforLink(index){
  switch(index){
    case 0:
      return '#hero-home';
    case 1:
      return '#products';
    case 2:
      return '#steps';
    case 3:
      return '#realisations'

  }
}
const Desktopmenu = props => {
  
  return (
   
      <Box display="flex" align="center" justifyContent="center" style={{position: "absolute", top: '0', width: '100%'}}> 
        {['Home', 'Cennik', 'Kroki', 'Realizacje'].map((text, index) => (
          <Button 
            href={getIdforLink(index)} 
            key={text}
            disableFocusRipple={true}
            disableRipple={true}
            disableElevation={true}  
            style={{borderRadius: '0'}}          
            >
            <ListItemText primary={text} />
          </Button>
        ))}
      </Box>
      
  )
}



export default Desktopmenu
