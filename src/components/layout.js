/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import Header from "./header"
import "./layout.css"


let theme = createMuiTheme({
  palette: {
    primary: {
      main:'#87f4ff',
    },
  },
});

theme = responsiveFontSizes(theme);



const Layout = ({ children }) => {
 
  return (
    <>
                <ThemeProvider theme={theme}>

      <Header />
      
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

export default Layout
