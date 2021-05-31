import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Sectiontitle from "./sectiontitle"
import DeveloperAnimate from "../assets/developer-animate.svg"

const about = 
  {
    title: "Poznajmy się.",
    desc:"Cześć! Mam na imię Marcin, jestem webdeveloperem. Projektuję i tworzę strony internetowe. Tworzeniem aplikacji webowych zajmuję się od 2018 roku. Pracowałem z technologiami: PHP, MSQL, jQuery, JavaScript, HTML, CSS, React, Gatsby, GraphQL, Prestashop, Wordpress, Netlify. Obecnie pracuję jako freelancer, żeby mieć więcej czasu na inne zainteresowania. Pomogę Ci wprowadzić Twój biznes do internetu."
  }

const style = {
  text:{
    maxWidth: '40%'
  },
  img:{
    maxWidth: '50%', 
    width: '100%',
    marginLeft: 'auto'
  },
  img_sm:{
    width: '100%'
  }
}

const About = () => {
  const theme = useTheme();
  const match_md = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <section id="realisations">
      <Container>
        
        <Box display="flex"  flexWrap="wrap">
          <Box style={match_md ? style.text : null} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
            <Typography variant="h2">{about.title}</Typography>
            <Typography variant="body1">{about.desc}</Typography>
          </Box>
          <Box style={match_md ? style.img : style.img_sm}>
            <DeveloperAnimate />
          </Box>
        </Box>
        
      </Container>
    </section>
  )
}

export default About
