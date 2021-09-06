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
import Desktopmenu from "./Desktopmenu"
import ScrollUp from "./ScrollUp"

const SwitchStyle = {
  position: "absolute",
  top: "25px",
  left: "25px",
  zIndex: '1201'
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
const Header = props => {
  const theme = useTheme()
  const match_md = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <header >
     
      <Box style={SwitchStyle}>
        <Switch checked={props.darkState} onChange={props.handleThemeChange} />
      </Box>
      {/*match_md ? <Desktopmenu /> : <MobileMenu />*/}
      <ScrollUp showBelow={650}/>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
