import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/';

import ImageBG from '../images/herohome-bg.svg'

const Hero = () =>{
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

const styles = {
    hero: {
        backgroundImage: `url(${ImageBG})`,
        backgroundPosition: 'right',
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    }
};

const siteData = data.site.siteMetadata;
    return(
        <section id="hero-home">
                <Container >
                    <Box component="div" style={styles.hero}  display="flex" flexDirection="column" justifyContent="center">
                        <Box mb={3} component="div" display="flex" flexDirection="column" justifyContent="center" style={{maxWidth: '800px'}}>
                            <Typography variant="h1" ><Box fontWeight={800} >{siteData.title}</Box></Typography>
                            <Typography variant="body1" style={{maxWidth: '450px'}}>{siteData.subtitle}</Typography>
                        </Box>
                        <Grid container spacing={3}>
                            
                            <Grid item >
                                <Button variant="contained"   color="primary">Zamów wyscenę</Button>
                            </Grid>
                            <Grid item >
                                <Button variant="contained" color="secondary" >Dowiedz się więcej</Button>
                            </Grid>

                            
                            

                        </Grid>   
                    </Box>
                </Container>           
        </section>
    )
}

export default Hero;