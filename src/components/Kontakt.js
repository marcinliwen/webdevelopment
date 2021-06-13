import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper';
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Sectiontitle from "./sectiontitle"
import KontaktForm from "./KontaktForm"

const Kontakt = () => {
  const theme = useTheme()
  const match_md = useMediaQuery(theme.breakpoints.up("md"))

  const style = {
    text: {
      maxWidth: "50%",
    },
    img: {
      maxWidth: "50%",
      width: "100%",
      marginLeft: "auto",
    },
    img_sm: {
      width: "100%",
    },
  }

  return (
    <section id="kontakt">
      <Container>
        <Box display="flex" flexWrap="wrap">
          <Box
            style={match_md ? style.text : null}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >
              <Typography paragraph  variant="h2">Napisz do mnie</Typography>
              <Typography paragraph variant="body1">
                Masz pytanie? Chciałbyś wiedzieć więcej?
              </Typography>
          </Box>
          <Box style={match_md ? style.img : style.img_sm}>
            <Paper square elevation={0} style={{padding: "16px"}}>
              <KontaktForm />
            </Paper>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default Kontakt
