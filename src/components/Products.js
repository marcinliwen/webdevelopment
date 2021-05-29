import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

import Sectiontitle from "./sectiontitle"

const products = [
  {
    title: "Strona firmowa",
    desc:
      "Pokaż czym zajmuje się Twoja firma, powiedz klientom jak się z Tobą skontaktować, jak do Ciebie trafić, jakie produkty lub usługi oferujesz.",
  },
  {
    title: "Landing Page",
    desc:
      "Zaprezentuj swój produkt, usługę i wydażenie. Strona pokazuje zalety i atuty produktu, pokazuje detale. W krutki i przejrzysty sposób.",
  },
  {
    title: "Portfolio",
    desc:
      "Tu możesz pokazać swoje prace w galerii zdjęć, poinformować o aktualnościach lub o najbliższym wydarzeniu.",
  },
  {
    title: "Blog",
    desc:
      "Dodawaj artykuły i zdjęcia. Udostępniaj w mediach społecznościowych.",
  },
  {
    title: "Modernizacja",
    desc: "Odświerz wygląd swojej strony, popraw szybkość ładowania lub SEO, dodaj nowe funkcje.",
  },
]
const Products = () => {
  return (
    <section id="products">
      <Container>
        <Sectiontitle title="Jakie strony wykonuję?" />
        <Grid container spacing={2}>
          {products.map((item, index) => (
            <Grid item md={3} key={item} style={index === 4 ?{width: '100%', maxWidth: '100%', flex: '100%'}:{}}>
              <Box p={4} boxShadow={2} style={{ height: "100%" }}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1">{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Products
