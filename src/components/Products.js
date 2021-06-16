import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import ExtraFeatures from "./ExtraFeatures"
import FeaturesList from "./FeaturesList"
import Sectiontitle from "./sectiontitle"
import PricelistTab from "./PricelistTab"
import PriceAlTabs from "./PriceAlTabs"
import PricelistForm from "./PricelistForm"
import { makeStyles } from "@material-ui/core/"
import Otherform from "./Otherform"
import ideaIcon from "../../static/idea.svg"
import interfaceIcon from "../../static/interface.svg"

const products = [
  {
    title: "Basic",
    desc1: "Idealne rozwiązanie jako:",
    category:['landing page','strona wizytówka', 'strona produktu', 'strona wydarzenia', 'krótka strona portfolio'],
    desc:
      "Zaprezentuj swój produkt, usługę lub wydarzenie od najlepszej strony. W krótki i przejrzysty sposób pokaż zalety, detale i najważniejsze informacje.",

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
    desc1: "Idealne rozwiązanie jako: ",
    category: ['strona firmowa z cennikiem i opisem usług', 'strona portfolio z kalendarzem i galerią ', 'strona osobista'],
    desc:
      "Pokaż czym zajmuje się Twoja firma, powiedz klientom jak się z Tobą skontaktować, jak do Ciebie trafi. Pokaż produkty, usługi lub swoje prace w rozbudowanej galerii.",
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
    desc1: "Idealne rozwiązanie jako:",
    category: ['rozbudowana strona firmowa z kategoriami produktów / usłóg', 'dodawaj artukułu do modułu bloga', 'strona wielojęzyczna' ],
    desc:
      "Pokaż swoje produkty lub usługi w kategoriach, dodaj rozbudowane opisy swojej działalności, wysyłaj newslettery. Twórz artykuły na blog i udostępniaj aktualności.",
    features: [
      {title:"do 10 podstron", active: true},
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

const useStyles = makeStyles(theme => ({
  gradient_dark: {
    background: theme.palette.gradient.dark,
    color: "#fff",
    
  },
  btnList:{
    background: theme.palette.gradient.dark,
    color: "#fff",
    margin: "8px 0",
    padding: "8px 16px",
    flexGrow: "1",
    fontSize: "24px",
    borderRadius: "0",
    textTransform: "none"
  }
}));
const Products = () => {
  const classes = useStyles()

  
  return (
    <section id="products">
      <Container>
        <Sectiontitle title="Jakie strony wykonuję?" />
        <Grid container spacing={2}>
          {products.map((item, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={item}
              style={
                index > 2
                  ? { width: "100%", maxWidth: "100%", flex: "100%" }
                  : {}
              }
            >
              <Paper style={{ height: "100%" }}>
              <Box p={3}  style={{ height: "100%" }} display="flex" flexDirection="column">
                <Box >
                  <Typography variant="h4" align="center" gutterBottom>{item.title}</Typography>
                  {/*<Typography variant="h4" align="center" gutterBottom>od {item.price} PLN</Typography>*/}
                </Box>
                <Divider />
                <Box p={0} style={{ height: "100%" }} display="flex" flexDirection="column">
                  {/*<PricelistTab desc1={item.desc1} category={item.category} desc={item.desc} features={item.features}/>*/}
                  <Box mt={2}>
                    <Typography paragraph variant="body1" >{item.desc1}</Typography>
                    <Box  mb={2}> 
                        <ul>
                          {item.category.map((item)=>(
                              <Box component="li" mr={2}>
                                  <Typography>{item}</Typography>
                              </Box>
                          ))}
                        </ul>
                       
                    </Box>
                    <Typography variant="body1" >{item.desc}</Typography>
                  </Box>
                  
                  {/*<FeaturesList features={item.features} style={{marginTop: "auto"}}/>*/}
                  <PricelistForm  title={item.title} price={item.price} features={item.features} />
                  {/*<Box pt={2} pb={1} mt="auto" textAlign="center" display="flex" justifyContent="space-evenly" flexWrap="wrap" >
                    <Button  variant="contained" className={classes.gradient_dark, classes.btnList} style={{marginTop: "8px", marginBottom:"8px"}}>Wybieram</Button>
                  </Box>*/}
                </Box>

              </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box mt={4}>      
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper style={{height: "100%"}}>
              <Box boxShadow={0} style={{ height: "100%" }} display="flex" flexDirection="column">
                <Box p={3} display="flex" flexWrap="wrap" alignItems="center">
                  <Typography variant="h4" >Coś innego?</Typography>
                  <img src={ideaIcon} width="64px" height="64px" style={{marginLeft: "auto"}}/>
                  <Typography style={{marginTop: "16px"}} variant="body1">Masz już gotowy projekt strony? A może masz inny pomysł na swoją stronę? Znajdziemy rozwiązanie i zbudujemy stronę spełniające Twoje wymagania.</Typography>
                </Box>
                <Otherform title="Coś innego?" />
              </Box>
            </Paper>    
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{height: "100%"}}>
              <Box boxShadow={0} style={{ height: "100%" }} display="flex" flexDirection="column">
                <Box p={3} display="flex" flexWrap="wrap" alignItems="center">
                  <Typography variant="h4" >Modernizacja</Typography>
                  <img src={interfaceIcon} width="64px" height="64px" style={{marginLeft: "auto"}}/>
                  <Typography style={{marginTop: "16px"}}  variant="body1">Odświerz wygląd swojej strony, popraw szybkość ładowania lub SEO, dodaj nowe funkcje.</Typography>
                </Box>
                <Otherform title="Modernizacja" />
                {/*<Box p={2} mt="auto" textAlign="center" display="flex" justifyContent="flex-end" flexWrap="wrap">
                  <Button variant="contained" color="primary"  className={classes.gradient_dark} style={{marginTop: "8px", marginBottom:"8px", textTransform: "none"}}>Wybieram</Button>
                </Box>*/}
              </Box>
            </Paper>    
          </Grid>
        </Grid>
        </Box>
        
        
      </Container>
    </section>
  )
}

export default Products
