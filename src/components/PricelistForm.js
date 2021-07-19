import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from "@material-ui/core/Box"
import FeaturesList from "./FeaturesList"
import PricelistFormForm from "./PricelistFormForm"
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { navigate } from "gatsby-link"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';




import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/"


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
    },
    formDialog:{
        textAlign: 'left',
        visibility: 'hidden',
        position: 'fixed',
        top: '0',
        left:'0',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up("md")]: {
            height: 'inherit',
            maxHeight: '100%',
            maxWidth: '960px',
            top: '50%',
            left:'50%',
            transform: 'translate(-50%, -50%)', 
        },
        '&[open]':{
            visibility: 'visible',
            zIndex: '9999',
        }
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 2,
        color: '#fff',
      },
    
  }));

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

const isBrowser = typeof window !== "undefined"

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles()

  React.useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    if(open){
      document.querySelector("html").classList.add('block-scroll')
      //console.log(document.querySelector("html"))
    }
    else{ 
      //console.log(document.querySelector("html"))
      document.querySelector("html").classList.remove('block-scroll')
    }
  });
  //form handling
    

    const handleSubmit = e => {
        console.log('send message')
        e.preventDefault()
        const form = e.target
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
            "form-name": form.getAttribute("name"),
            ...state,
        }),
        })
        .then(() => navigate(form.getAttribute("action")))
        .catch(error => alert(error))
    }
    const [state, setState] = React.useState({})
  
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const formName = "pricelist-" + props.title;


  return (
        <Box pt={2} pb={1} mt="auto" textAlign="center" display="flex" justifyContent="space-evenly" flexWrap="wrap" >
            <Button onClick={handleClickOpen} variant="contained" className={classes.gradient_dark, classes.btnList} style={{marginTop: "8px", marginBottom:"8px"}}>Więcej</Button>
    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
      <Paper
        className={classes.formDialog}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
            <Typography variant="h4">Chcę zbudować stronę w wersji: {props.title} <Box component="span" style={{whiteSpace: "nowrap"}}>{/*(od {props.price} PLN)*/}</Box></Typography></DialogTitle>
        <DialogContent>
            <Box display={fullScreen ? "block" : "flex"}>
            <Box flex="1" pr={{sm: 4}}>
                <Typography variant="body1" >Dostępne funkcje:</Typography>
                <FeaturesList features={props.features} />
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box pl={{sm: 4}} flex="1">
                <form
                    id={formName}
                    name={formName}
                    method="post"
                    //action="/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value={formName} />
                    <p hidden>
                    <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={handleChange} />
                    </label>
                    </p>
                    <Grid container spacing={2} justify="flex-start" alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="body1" style={{marginTop: "16px"}}>Dane kontaktowe:</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                        required="true"
                        id="name"
                        label="Imię"
                        color="secondary"
                        type="text"
                        onChange={handleChange}
                        fullWidth
                        style={{color:"rgb(240, 56, 0)"}}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                        id="tel"
                        label="Telefon"
                        color="secondary"
                        type="text"
                        onChange={handleChange}
                        fullWidth
                        style={{ color:"rgb(240, 56, 0)"}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required="true"
                        id="mail"
                        label="Mail"
                        color="secondary"
                        type="email"

                        onChange={handleChange}
                        fullWidth
                        style={{color:"rgb(240, 56, 0)"}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography style={{marginTop: "16px"}} variant="body1">Co jeszcze mogę dla Ciebie zrobić:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="message"
                        label="Wiadomość"
                        color="secondary"
                        multiline
                        rows={3}
                        onChange={handleChange}
                        fullWidth
                        style={{color:"rgb(240, 56, 0)"}}
                        />
                    </Grid>
                    <Grid item xs={12} style={{display: "flex"}}>
                        
                        
                        </Grid>
                    </Grid>
                </form>
            </Box>
            </Box>
        </DialogContent>
        <DialogActions style={{padding: "16px 24px"}}>
                        <Button onClick={handleClose} style={{marginLeft: "auto", textTransform: "none"}}>Zamknij</Button>
                        <Button form={formName} type="submit"  variant="contained" color="primary"  className={classes.gradient_dark} style={{textTransform: "none"}}>
                            Proszę o wycenę
                        </Button>
        </DialogActions>
      </Paper>
      </Backdrop>
      </Box>
  );
}

