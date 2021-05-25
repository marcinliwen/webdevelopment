/**
 * jeżeli zmienna hero_image jest true - pokazuje obraz
 */
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/';

import ImageBG from '../images/herohome-bg.svg'

const useStyles = makeStyles((theme) => ({
    hero_img: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        zIndex: '-1',
        opacity: '0.4',
        [theme.breakpoints.up('md')]: {
            width: '50%',
            opacity: '1',
            alignItems: 'center'
        },
    },
    hero_noimg:{
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    }
  }));

const Hero = (props) =>{
    const data = useStaticQuery(graphql`
    query SiteDataQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)
    const siteData = data.site.siteMetadata;
    const styles = {
        hero: {
            //backgroundImage: `url(${ImageBG})`,
            //backgroundPosition: 'right',
            //backgroundSize: '50%',
            //backgroundRepeat: 'no-repeat',
            height: '100vh',
        },
        hero_title :{
            maxWidth: '800px',
        }
    };

    const classes = useStyles();

    return(
        <section id="hero-home">
                <Container >
                    <Box component="div" style={styles.hero}  display="flex" flexDirection="column" justifyContent="center">
                        <Box 
                            mb={3} 
                            component="div" 
                            display="flex" 
                            flexDirection="column" 
                            justifyContent="center" 
                            style={styles.hero_title} 
                            className={props.hero_image ? null : classes.hero_noimg } 
                        >
                            <Typography variant="h1" style={{marginBottom: '42px'}}>{siteData.title}</Typography>
                            <Typography 
                                variant="body1" 
                                style={{maxWidth: '450px'}}
                                className={props.hero_image ? null : classes.hero_noimg } 
                            >
                                {siteData.subtitle}
                            </Typography>
                        </Box>
                        <Grid container spacing={3} justify={props.hero_image ? "left" : "center"}>                           
                            <Grid item >
                                <Button variant="contained"   >Zamów wycenę</Button>
                            </Grid>
                            <Grid item >
                                <Button variant="contained">Dowiedz się więcej</Button>
                            </Grid>
                        </Grid>   
                        {props.hero_image ? <Box style={styles.hero_img} className={classes.hero_img}>
                            <StaticImage
                                src="../images/herohome-bg.svg"
                                width={600}
                                quality={95}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                placeholder="none"
                                alt="A Gatsby astronaut"
                            />
                        </Box>
                        : null
                        }
                    </Box>
                </Container>           
        </section>
    )
}

export default Hero;