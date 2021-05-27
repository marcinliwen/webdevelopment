import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Switch from "@material-ui/core/Switch"

const Header = props => (
  <header style={{position: 'fixed', top: '0', zIndex: '999'}}>
    <Switch onChange={props.handleThemeChange} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
