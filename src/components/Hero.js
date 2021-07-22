/**
 * jeżeli zmienna hero_image jest true - pokazuje obraz
 */
import * as React from "react"
import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { Fade } from "react-awesome-reveal";
import {AttentionSeeker} from "react-awesome-reveal";

import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { makeStyles } from "@material-ui/core/"
import { useTheme } from "@material-ui/core/styles"
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles"

import ImageBG from "../images/herohome-bg.svg"
import { connect, useSelector } from "react-redux"

const useStyles = makeStyles(theme => ({
  hero_img: {
    position: "absolute",
    bottom: "0px",
    right: "0px",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    zIndex: "-1",
    opacity: "0.4",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      opacity: "1",
      alignItems: "center",
    },
  },
  hero_noimg: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  hero_gradient_light: {
    background: theme.palette.gradient.dark
  },
  hero_gradient_dark: {
    background: theme.palette.gradient.dark
  },
  hero_buttons:{
    //background: theme.palette.gradient2.main,
    '& a': {
      width: "100%",
      color: "#fff",
      textTransform: "none",
      fontSize: "24px",
      padding: "8px 16px",
      borderRadius: "0"
    },
    '& > *':{
      flexGrow: "1",
      margin: theme.spacing(1),
    }
  }
}))

const Hero = props => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      site {
        siteMetadata {
          title
          title2
          subtitle
        }
      }
    }
  `)
  const siteData = data.site.siteMetadata
  const styles = {
    hero: {
      minHeight: "100vh",
    },
    hero_title: {
      maxWidth: "800px",
    },
    hero_subtitle:{
      width: "max-content",
      margin: "0",
      lineHeight: "2rem",
      padding: "8px  16px",
      //background: "linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      color: "#fff",
    }
  }
  const classes = useStyles()

  const isDarkTheme = useTheme().palette.type === "dark"
  console.log('palette: ', useTheme().palette)

  return (
    <section
      id="hero-home"
      className={isDarkTheme ? "dark_bg" : "light_bg"}
      style={{ padding: "0px" }}
    >
      <Container>
        <Box
          component="div"
          style={styles.hero}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            mb={3}
            component="div"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            style={styles.hero_title}
            className={props.hero_image ? null : classes.hero_noimg}
          >
            <Fade direction="down" triggerOnce>
              <Typography variant="h1">
                {siteData.title}
              </Typography>
            </Fade>
            
            {/*<Paper elevation={0} square style={{width: "max-content", margin: "auto"}} >
              <Typography gutterBottom={false} paragraph={false} variant="h4" className={classes.hero_gradient} style={styles.hero_subtitle}>Firmowe, Osobiste, Portfolio, Blog</Typography>
  </Paper>*/}
  {/*style gradient dla buttonów className={isDarkTheme ? classes.hero_gradient_dark : classes.hero_gradient_light}*/}
            <Box mb={4} display="flex" justifyContent="center" flexWrap="wrap" className={classes.hero_buttons} >
              <Fade cascade damping="0.3" triggerOnce>
              <Button className={isDarkTheme ? classes.hero_gradient_dark : classes.hero_gradient_light}  href="#products" size="large">Firmowe</Button>
              <Button className={isDarkTheme ? classes.hero_gradient_dark : classes.hero_gradient_light} href="#products" size="large">Osobiste</Button>
              <Button className={isDarkTheme ? classes.hero_gradient_dark : classes.hero_gradient_light} href="#products" size="large">Portfolio</Button>
              <Button className={isDarkTheme ? classes.hero_gradient_dark : classes.hero_gradient_light} href="#products" size="large">Blog</Button>
              
              </Fade>
              
            </Box>
            <Fade delay="100" triggerOnce> 
              <Typography
                variant="body1"
                style={{ maxWidth: "450px" }}
                className={props.hero_image ? null : classes.hero_noimg}
              >
                {siteData.subtitle}
              </Typography>
            </Fade>            
          </Box>
          <Grid
            container
            spacing={3}
            justify={props.hero_image ? "left" : "center"}
          >
            {/*<Grid item>
              <Button variant="contained">Zamów stronę</Button>
            </Grid>*/}
            <Grid item>
              <Fade direction="top" delay="150" triggerOnce>
              <Button href="#special" style={{ textDecoration: "none" }}>
                  <Box display="flex"  flexDirection="column"
                    justifyContent="center" alignItems="center">
                    <Box>Dowiedz się więcej</Box>
                    <Box style={{position: "relative", display:"flex", justifyContent:"center"}}>
                      <ArrowDownwardIcon className="animation_fadedown" fontSize="small" style={{opacity: "0.7"}}/>
                      <ArrowDownwardIcon className="animation_fadedown_second" fontSize="small" style={{opacity: "0.7"}}/>
                    </Box>
                    
                  </Box>

                </Button>
              </Fade>
               
            </Grid>
          </Grid>
          {props.hero_image ? (
            <Box style={styles.hero_img} className={classes.hero_img}>
              <StaticImage
                src="../images/herohome-bg.svg"
                width={600}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="none"
                alt="A Gatsby astronaut"
              />
            </Box>
          ) : null}
        </Box>
      </Container>
    </section>
  )
}

export default Hero
