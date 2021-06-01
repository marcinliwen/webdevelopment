import * as React from "react"
import PropTypes from "prop-types"
//import { Link } from "gatsby"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Link from '@material-ui/core/Link';
import { useTheme } from '@material-ui/core/styles';


import Sectiontitle from "./sectiontitle"

const realisations = [
  {
    title: "Zielonetechnologie.net",
    desc:
      "Strona Firmowa. Strona prezentująca usługi firmy, wdrożono kalkulator oferty, najważniejsze informacje o dzialalności firmy, lokalizację w Mapy Google, formularze kontaktowe, podstrony z informacjami o usługach.  ",
    link: "https://www.zielonetechnologie.net/"
  },
  {
    title: "AnimalVet",
    desc:
      "Strona Firmowa. Strona prezentuje gabinet weterynaryjny, kategorie usług, opis gabinetu i lekarzy, lokalizację w Mamach Google, formularz kontaktowy i newsletter. ",
    link:"https://animalvettest.netlify.app/",
    },
  {
    title: "Kaja Dekor",
    desc:
      "Strona firmowa. Strona prezentuje usługi firmy dekoracyjnej, skupia się na rozbudowanej galerii zdjęć z realizacji.",
    link: "https://multi03.netlify.app/",
    },
]
const Realisations = () => {
  const isDarkTheme = useTheme().palette.type === 'dark';

  return (
    <section id="realisations" className={isDarkTheme ? "dark_bg" : "light_bg"}>
      <Container>
        <Sectiontitle title="Zrealizowane projekty" />
        <Grid container spacing={2}>
          {realisations.map((item, index) => (
            <Grid item md={6} key={item} style={index > 3 ?{width: '100%', maxWidth: '100%', flex: '100%'}:{}}>
              <Box p={4} boxShadow={2} style={{ height: "100%" }}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1">{item.desc}</Typography>
                <Link variant="body1"  href={item.link} target="_blank" rel="noreferrer">{item.title}</Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Realisations
