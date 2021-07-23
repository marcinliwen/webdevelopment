import React from "react"
import PropTypes from "prop-types"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import { useTheme } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"
import { Slide } from "react-awesome-reveal";

import Sectiontitle from "./sectiontitle"
import ComponenetName from "./ComponenetName"
const realisations = [
  {
    title: "Zielonetechnologie.net",
    desc:
      "Strona Firmowa. Strona prezentująca usługi firmy, wdrożono kalkulator oferty, najważniejsze informacje o dzialalności firmy, lokalizację w Mapy Google, formularze kontaktowe, podstrony z informacjami o usługach.  ",
    link: "https://www.zielonetechnologie.net/",
    img: "greentech",
  },
  {
    title: "AnimalVet",
    desc:
      "Strona Firmowa. Strona prezentuje gabinet weterynaryjny, kategorie usług, opis gabinetu i lekarzy, lokalizację w Mamach Google, formularz kontaktowy i newsletter, strona dwujęzyczna. ",
    link: "https://animalvettest.netlify.app/",
    img: "animalvet",
  },
  {
    title: "Kaja Dekor",
    desc:
      "Strona firmowa. Strona prezentuje usługi firmy dekoracyjnej, skupia się na rozbudowanej galerii zdjęć z realizacji. Dodany moduł CMS do łatwego uzupełniania treści i zdjęć, dwu języczna strona, lokalizacja w Mapach Google.",
    link: "https://studiofiran.netlify.app/",
    img: "firany",
  },
]
const useStyles = makeStyles(theme => ({
  gridItem: {
    width: "100%",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      width: "calc(100% / 5)",
    },
  },
  paper: {
    padding: "16px",
    height: "100%",
  },
}))

const Realisations = (props) => {
  const isDarkTheme = useTheme().palette.type === "dark"
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "realisations"}}) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
              
            }
            name
          }
        }
      }
    }
  `);

  const images = data.allFile.edges;
  //images.map(item=>item.node.childImageSharp.fluid.originalName)
  return (
    <section id="realisations" className={isDarkTheme ? "dark_bg" : "light_bg"}>
      <Container>
        <Sectiontitle title="Zrealizowane projekty" />
        <Grid container spacing={2} style={{overflow: "hidden"}}>
          {realisations.map((item, index) => {
            //console.log(images)
            const image = images.filter(function(itemdata){
              
              return(itemdata.node.name === item.img)});
            //console.log(image)
            const thisImage = getImage(image[0].node);
            //console.log(thisImage);
            return(
            <Grid
              item
              md={12}
              key={item}
              style={
                index > 3
                  ? { width: "100%", maxWidth: "100%", flex: "100%" }
                  : {}
              }
            >
              <Slide direction={index%2 ===0? "left":"right"} fraction="0.5"  triggerOnce>
              <Paper elevation={3} className={classes.paper}>
                <Box p={4} style={{ height: "100%" }}>
                  <Grid container>
                    <Grid item md={6} style={{display: "flex", flexDirection: 'column', justifyContent: 'center'}}>
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      ><Typography paragraph variant="h4" style={{wordBreak: "break-word"}}>{item.title}</Typography></a>
                      <Typography variant="body1">{item.desc}</Typography>
                    </Grid>
                    <Grid item md={6}>
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                      <Box mt={2} mb={2}>
                        <GatsbyImage image={thisImage}  alt="name"/>
                      </Box>
                      </a>
                    </Grid>
                  </Grid>
                 
                  
                </Box>
              </Paper>
              </Slide>
            </Grid>
          )})}
        </Grid>
      </Container>
    </section>
  )
}



export default Realisations


