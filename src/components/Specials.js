import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Sectiontitle from "./sectiontitle"


const specials = [
  {
    title: "Nowoczesna",
    desc:
      "Projekt strony oparty o aktualne trendy. Strona zakodowana z wykorzystaniem najnowszych techologii.",
    icon: "/modern.svg"
  },
  {
    title: "Responsywna",
    desc:
      "Strona dobrze wyglądająca i działająca na każdym typie urządzenia, od smartfonów po komputery stacjonarne.",
    icon: "/responsive-design.svg"
  },
  {
    title: "Szybka",
    desc:
      "Nie daj klientom czekać na załadowanie się Twojej strony. Strona pojawi się zaraz po kliknięciu w link w wyszukiwarce.",
    icon: "fast.svg"
  },
  {
    title: "Przyjazna SEO",
    desc:
      "Strona zaprojektowana tak aby ułatwić klientom odnalezienie Twojej strony w wyszukiwarce Google.",
    icon: "/seo.svg"
  },
  {
    title: "Bezpieczna",
    desc:
      "Zdobądź zaufanie klientów prezentując stronę szyfrowaną protokołem HTTPS. Dzięki technologii serverless Twoja strona nigdy nie będzie zawirusowana.",
    icon: "secure.svg"
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
    height: "100%",
  },
}))

const Special = () => {
  const classes = useStyles()

  return (
    <section id="special">
      <Container>
        <Sectiontitle title="Jaka powinna być dobra strona?" />
        <Grid container spacing={2}>
          {specials.map(item => (
            <Grid item className={classes.gridItem} key={item}>
              <Paper elevation={0} className={classes.paper}>
                <Box p={4} style={{ height: "100%", minHeight: "250px" }}>
                  <Typography variant="h4" style={{ fontSize: "24px", textAlign: "center" }}>
                    {item.title}
                  </Typography>
                  <Box textAlign="center" mt={4} mb={4}>
                    <img src={item.icon}  width="100px" height="100px"/>
                  </Box>
                  <Typography variant="body1">{item.desc}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Special
