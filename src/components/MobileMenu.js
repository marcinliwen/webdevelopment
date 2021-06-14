import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import RestoreIcon from "@material-ui/icons/Restore"
import FavoriteIcon from "@material-ui/icons/Favorite"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import Switch from "@material-ui/core/Switch"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: "0px",
    left: "0px",
    zIndex: '999'
  },
})

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

export default function SimpleBottomNavigation(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
       {['Home', 'Cennik', 'Kroki', 'Realizacje'].map((text, index) => (
      <Button 
      href={getIdforLink(index)} 
      key={text}
      disableFocusRipple={true}
      disableRipple={true}
      disableElevation={true}  
      style={{borderRadius: '0'}}          
      >
      {text}
    </Button>
    
       ))}
    </BottomNavigation>
  )
}
