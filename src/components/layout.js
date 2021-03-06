/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useState, useEffect } from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Switch from "@material-ui/core/Switch"
import { connect } from "react-redux"
import Header from "./header"
import "./layout.css"
import Navmenu from "./Navmenu"
import Menuburger from "./Menuburger"
/*let theme = createMuiTheme({
  palette: {
    type: 'light',
    text:{
      //primary: "rgba(255, 255, 255, 0.8)",
    }
  },
  typography: {
    fontFamily: 'Work Sans',
    h1:{
      fontWeight: '100'
    }
  },
});
*/
if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }) => {
  //pobiera wartość mediaquery gdy 'window' jest określony
  const isBrowser = () => typeof window !== "undefined"
  const isDarkMode =
    isBrowser() && window.matchMedia("(prefers-color-scheme: dark)")

  //console.log('layout [isDarkMode]:', isDarkMode);
  const [darkState, setDarkState] = useState(false)

  const handleThemeChange = () => {
    setDarkState(!darkState)
  }

  let theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkState ? "dark" : "light",
          gradient: {
            main: "linear-gradient(316deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            light:"linear-gradient( 226deg, #92ddf1 16%, #f9b290 60%, #ffe0b8 100%)",
            dark:"linear-gradient(226deg,#00c0f1 16%, #ff641a 60%, #ff9100 100%)"
          },
          gradient2: {
            main: "linear-gradient(226deg,#00c0f1 16%, #ff641a 60%, #ff9100 100%)"
          },
          gradient3:{
            main: "linear-gradient( 226deg, #92ddf1 16%, #f9b290 60%, #ffe0b8 100%)"
          }
        },
        typography: {
          fontFamily: "Work Sans",
          h1: {
            fontWeight: "100",
          },
          h2: {
            fontWeight: "100",
          },
        },
      })
    //[prefersDarkMode],
  )
  theme = responsiveFontSizes(theme)
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/*<Switch checked={darkState} onChange={handleThemeChange} />*/}
        <Header handleThemeChange={handleThemeChange} darkState={darkState} />
        <Navmenu />
        <div className="wrapper-perspective">
        <main>{children}</main>
        </div>
        
        <footer style={{textAlign: "center"}}>
          © {new Date().getFullYear()},
          {` `}
          Stary Wieloryb
        </footer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
