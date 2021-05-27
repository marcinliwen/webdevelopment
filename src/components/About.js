import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

import Sectiontitle from "./sectiontitle"

const About = () => {
  return (
    <section id="about">
      <Container>
        <Sectiontitle title="About me" />
      </Container>
    </section>
  )
}

export default About
