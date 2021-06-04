import * as React from "react"
import PropTypes from "prop-types"
//import { Link } from "gatsby"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import { useTheme } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"

import Sectiontitle from "./sectiontitle"

const realisations = [
  {
    title: "Zielonetechnologie.net",
    desc:
      "Strona Firmowa. Strona prezentująca usługi firmy, wdrożono kalkulator oferty, najważniejsze informacje o dzialalności firmy, lokalizację w Mapy Google, formularze kontaktowe, podstrony z informacjami o usługach.  ",
    link: "https://www.zielonetechnologie.net/",
  },
  {
    title: "AnimalVet",
    desc:
      "Strona Firmowa. Strona prezentuje gabinet weterynaryjny, kategorie usług, opis gabinetu i lekarzy, lokalizację w Mamach Google, formularz kontaktowy i newsletter, strona dwujęzyczna. ",
    link: "https://animalvettest.netlify.app/",
  },
  {
    title: "Kaja Dekor",
    desc:
      "Strona firmowa. Strona prezentuje usługi firmy dekoracyjnej, skupia się na rozbudowanej galerii zdjęć z realizacji. Dodany moduł CMS do łatwego uzupełniania treści i zdjęć, dwu języczna strona, lokalizacja w Mapach Google.",
    link: "https://multi03.netlify.app/",
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

const Realisations = () => {
  const isDarkTheme = useTheme().palette.type === "dark"
  const classes = useStyles()

  return (
    <section id="realisations" className={isDarkTheme ? "dark_bg" : "light_bg"}>
      <Container>
        <Sectiontitle title="Zrealizowane projekty" />
        <Grid container spacing={2}>
          {realisations.map((item, index) => (
            <Grid
              item
              md={6}
              key={item}
              style={
                index > 3
                  ? { width: "100%", maxWidth: "100%", flex: "100%" }
                  : {}
              }
            >
              <Paper elevation={3} className={classes.paper}>
                <Box p={4} style={{ height: "100%" }}>
                  <Typography variant="h4" style={{wordBreak: "break-word"}}>{item.title}</Typography>
                  <Typography variant="body1">{item.desc}</Typography>
                  <Link
                    variant="body1"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </Link>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Realisations
