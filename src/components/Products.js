import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Divider from '@material-ui/core/Divider';

import ExtraFeatures from "./ExtraFeatures"
import FeaturesList from "./FeaturesList"
import Sectiontitle from "./sectiontitle"

const products = [
  {
    title: "Basic",
    desc:
      "Zaprezentuj swój produkt, usługę lub wydarzenie od najlepszej strony. W krótki i przejrzysty sposób pokaż zalety, detale i najważniejsze informacje. Idealne rozwiązanie jako strona wizytówka firmy, produktu lub wydarzenia.",

    features: [
      {title:"wszystkie informacje na jednej stronie", active: true},
      {title:"responsywność RWD", active: true},
      {title: "formularz kontaktowy", active: true},
      {title: "formularz newslettera", active:false},
      {title: "Google Analitics", active: true},
      {title: "optymalizacja SEO", active: true},
      {title: "certyfikat SSL", active: true},
      {title: "moduł bloga, aktualności", active:false},
      {title: "prosty w obsłudze system CMS Netlify/Strapi (szkolenie online)", active: false},
      {title: "projekt oparty na szablonie + zdjęcia stockowe", active: true},
      {title: "wsparcie techniczne", active: true}
    ],
    price: "1000"
  },
  {
    title: "Standard",
    desc:
      "Pokaż czym zajmuje się Twoja firma, powiedz klientom jak się z Tobą skontaktować, jak do Ciebie trafi. Pokaż produkty, usługi lub swoje prace w rozbudowanej galerii. Idealne rozwiązanie dla stron firmowych z cennikiem i opisem usług, stron portfolio z galerią zdjęć lub filmów, kalendarzem, stron osobistych.  ",
    features: [
      {title:"do 5 podstron", active:true},
      {title:"responsywność RWD", active: true},
      {title: "formularz kontaktowy", active: true},
      {title: "formularz newslettera", active:false},
      {title: "Google Analitics", active: true},
      {title: "optymalizacja SEO", active: true},
      {title: "certyfikat SSL", active: true},
      {title: "moduł bloga, aktualności", active:false},
      {title: "prosty w obsłudze system CMS Netlify/Strapi (szkolenie online)", active: false},
      {title: "projekt oparty na szablonie + zdjęcia stockowe", active: true},
      {title: "wsparcie techniczne", active: true}
    ],
    extra_features: [
      "do 10 podstron",
      "powyżej 10 podstron",
      "system CMS Netlify/Strapi/WordPress",
      "formularz newslettera",
      "moduł bloga, aktualności",
      "dodatowy język na stronie",
      "indywidualny projekt graficzny + zdjęcia stockowe",
      "Copywriting - pomoc w dostarczeniu treści na stronę",
      "integracja Facebook: Messenger na stronie",
    ],
    price: "1500"
  },
  {
    title: "Pro",
    desc:
      "Ten pakiet zawiera wszystko to co 'Standard'. Dodatkowo pokaż swoje produkty lub usługi w kategoriach, dodaj rozbudowane opisy swojej działalności, wysyłaj newslettery. Twórz artykuły na blog i udostępniaj aktualności.",
    features: [
      {title:"powyżej 5 podstron", active: true},
      {title:"responsywność RWD", active: true},
      {title: "formularz kontaktowy", active: true},
      {title: "formularz newslettera", active: true},
      {title: "Google Analitics", active: true},
      {title: "optymalizacja SEO", active: true},
      {title: "certyfikat SSL", active: true},
      {title: "moduł bloga, aktualności", active: true},
      {title: "prosty w obsłudze system CMS Netlify/Strapi (szkolenie online)", active: true},
      {title: "projekt oparty na szablonie + zdjęcia stockowe", active: true},
      {title: "wsparcie techniczne", active: true}
    ],
    price: "2000"
  },
]
const Products = () => {
  return (
    <section id="products">
      <Container>
        <Sectiontitle title="Jakie strony wykonuję?" />
        <Grid container spacing={6}>
          {products.map((item, index) => (
            <Grid
              item
              md={4}
              key={item}
              style={
                index > 2
                  ? { width: "100%", maxWidth: "100%", flex: "100%" }
                  : {}
              }
            >
              <Box boxShadow={2} style={{ height: "100%" }} display="flex" flexDirection="column">
                <Box p={3}>
                  <Typography variant="h4" align="center" gutterBottom>{item.title}</Typography>
                  <Typography variant="h4" align="center" gutterBottom>{item.price} PLN</Typography>
                </Box>
                <Divider variant="middle" />
                <Box p={3} style={{ height: "100%" }} display="flex" flexDirection="column">
                  <Typography variant="body2" >{item.desc}</Typography>
                  <FeaturesList features={item.features} style={{marginTop: "auto"}}/>
                  <Box  textAlign="center" display="flex" justifyContent="space-evenly" flexWrap="wrap" >
                    <Button variant="contained" color="primary" style={{marginTop: "8px", marginBottom:"8px"}}>Wybieram</Button>
                    <Button variant="contained" color="secondary" style={{marginTop: "8px", marginBottom:"8px"}}>Dodaj funkcje</Button>
                  </Box>
                </Box>

              </Box>
            </Grid>
          ))}
        </Grid>
        <Box mt={4}>

        
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <Box boxShadow={2} style={{ height: "100%" }} display="flex" flexDirection="column">
            <Box p={3}>
              <Typography variant="h4" style={{marginBottom: "32px"}} gutterBottom>Coś inneg?</Typography>
              <Typography variant="body1">Masz inny pomysł na swoją stronę? Znajdziemy rozwiązanie i zbudujemy stronę spełniające Twoje wymagania.</Typography>
            </Box>
            <Box p={2} textAlign="center" display="flex" justifyContent="flex-end" flexWrap="wrap">
              <Button variant="contained" color="primary" style={{marginTop: "8px", marginBottom:"8px"}}>Wybieram</Button>
            </Box>
          </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box boxShadow={2} style={{ height: "100%" }} display="flex" flexDirection="column">
            <Box p={3}>
              <Typography variant="h4" style={{marginBottom: "32px"}} gutterBottom>Modernizacja</Typography>
              <Typography variant="body1">Odświerz wygląd swojej strony, popraw szybkość ładowania lub SEO, dodaj nowe funkcje.</Typography>
            </Box>
            <Box p={2} textAlign="center" display="flex" justifyContent="flex-end" flexWrap="wrap">
              <Button variant="contained" color="primary" style={{marginTop: "8px", marginBottom:"8px"}}>Wybieram</Button>
            </Box>
          </Box>
          </Grid>
        </Grid>
        </Box>
        
        
      </Container>
    </section>
  )
}

export default Products
