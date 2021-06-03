import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Switch from "@material-ui/core/Switch"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Box from "@material-ui/core/Box"

import MobileMenu from "./MobileMenu"

const SwitchStyle = {
  position: "fixed",
  top: "15px",
  right: "15px",
}

const Header = props => {
  const theme = useTheme()
  const match_md = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <header>
      <Box style={SwitchStyle}>
        <Switch checked={props.darkState} onChange={props.handleThemeChange} />
      </Box>
      {match_md ? null : <MobileMenu />}
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
