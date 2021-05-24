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
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));
const steps = [
    {
        "title" : "Rozmowa",
        "desc" : "Powiedz o swojej wizji, pomysłach, inspiracjach. Razem ułożymay plan działania i projekt przyszłej strony."
    },
    {
        "title" : "Projektowanie/ Kodowanie",
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
                <Sectiontitle title='Jakie są etapy tworzenia strony internetowej.'/>
                <Timeline align="alternate">
                {steps.map((item, index)=>
                     <TimelineItem>
                         <TimelineOppositeContent>
                            <Typography variant="body2" color={`${index === 4 ? "secondary" :"textSecondary"}`} style={{fontSize: "112px", lineHeight: '112px'}}>
                                {index + 1}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color={`${index === 4 ? "secondary" :''}`}>
                            </TimelineDot>
                            <TimelineConnector className={`${index === 4 ? classes.secondaryTail : ''} `}/>
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h4">{item.title}</Typography>
                            <Typography>{item.desc}</Typography>
                        </Paper>
                        </TimelineContent> 
                    </TimelineItem>         
                )}
                </Timeline>
            </Container>
        </section>
    )
}

export default Steps