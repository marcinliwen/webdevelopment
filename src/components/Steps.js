import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';

import Sectiontitle from './sectiontitle'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '16px',
      height: '100%',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    gridItem:{
        width: '100%',
        flexWrap: 'wrap',
        [theme.breakpoints.up('md')]: {
            width: 'calc(100% / 5)',
        }
    }
  }));
const steps = [
    {
        "title" : "Rozmowa",
        "desc" : "Powiedz o swojej wizji, pomysłach, inspiracjach. Razem ułożymay plan działania i projekt przyszłej strony."
    },
    {
        "title" : "Projek/ Kodowanie",
        "desc" : "Pracę rozpocznę od przygotowania testowej strony, zobaczysz wszystko na żywo i w akcji."
    },
    {
        "title" : "Testy i poprawki",
        "desc" : "Projekt będziemy dopracowywać i modyfikować tak, aby spełniał wszystkie oczekiwania."
    },
    {
        "title" : "Wdrożenie",
        "desc" : "Jeżeli wszystko będzie gotowe i będzie działać, uruchomię stronę pod właściwą domeną."
    },
    {
        "title" : "Rozwój",
        "desc" : "Najlepsze pomsły pojawiają się z czasem. Zrealizujmy je razem!"
    }
]
const Steps = () => {
    const classes = useStyles();

    return(
        <section id="steps">
            <Container >
                <Sectiontitle title='Jakie są etapy tworzenia strony internetowej?'/>
                <Grid container spacing={2}>
                {steps.map((item, index)=>
                     <Grid item className={classes.gridItem}  key={index}>
                         <Paper elevation={3}  className={classes.paper}>
                             <Box>
                                <Typography variant="body2"  color={`${index === 3 ? "secondary" :"textSecondary"}`} style={{fontSize: "112px", lineHeight: '112px', marginRight: '16px', minWidth: '64px'}}>
                                    {index + 1}
                                </Typography>   
                                <Box>
                                    <Typography variant="h4">{item.title}</Typography>
                                    <Typography>{item.desc}</Typography>
                                </Box>   
                             </Box>                 
                        </Paper>
                    </Grid >         
                )}
                </Grid>
            </Container>
        </section>
    )
}

export default Steps