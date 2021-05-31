/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useState, useEffect } from 'react';

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


const Layout = ({ children }) => {

  //pobiera wartość mediaquery gdy 'window' jest określony
  const isBrowser = () => typeof window !== "undefined"
  const isDarkMode = isBrowser() && window.matchMedia("(prefers-color-scheme: dark)");

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
        },
        typography: {
          fontFamily: "Work Sans",
          h1: {
            fontWeight: "100",
          },
          h2: {
            fontWeight: "100",
          },
          h4: {
            marginBottom: "16px",
          },
          button: {
            fontWeight: "900",
          },
        }
        
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
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
