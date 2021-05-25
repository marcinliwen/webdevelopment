import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const specials = [
    {
        "title":"Nowoczesność",
        "desc" : "Projekt strony oparty o aktualne trendy. Strona zakodowana z wykorzystaniem najnowszych techologii."
    },
    {
        "title" : "Responsywność",
        "desc" : "Strona dobrze wyglądająca i działająca na każdym typie urządzenia, od smartfonów po komputery stacjonarne."
    },
    {
        "title" : "Szybkość",
        "desc" : "Nie daj klientom czekać na załadowanie się Twojej strony. Strona pojawi się zaraz po kliknięciu w link w wyszukiwarce."
    },
    {
        "title" : "Optymalizacja SEO",
        "desc" : "Strona zaprojektowana tak aby ułatwić klientom odnalezienie Twojej strony w wyszukiwarce Google."
    },
    {
        "title" : "Bezpieczeństwo",
        "desc" : "Zdobądź zaufanie klientów prezentując stronę szyfrowaną protokołem HTTPS. Dzięki technologii serverless Twoja strona nigdy nie będzie zawirusowana."
    }
]

const Special = () => {
    console.log(specials)

    return(
        <section id="special">
            <Container >
            <Grid container spacing={2}>
                {specials.map((item)=>
                    <Grid  item md={4}  key={item} >
                        <Paper elevation={0}>
                            <Box p={4} style={{height: '100%', minHeight: '250px'}}>
                                <Typography variant="h4">{item.title}</Typography>
                                <Typography variant="body1">{item.desc}</Typography>
                            </Box> 
                        </Paper>
                        
                    </Grid>         
                )}
                </Grid>
            </Container>
        </section>
    )
}

export default Special;