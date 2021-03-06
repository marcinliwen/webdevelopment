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



import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/"


const useStyles = makeStyles(theme => ({
    gradient_dark: {
      background: theme.palette.gradient.dark,
      color: "#fff",
      textTransform: "none"      
    },
  }));

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

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


  //form handling
    

    const handleSubmit = e => {
        //console.log('send message')
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
    const formName = "pricelist-" + props.title.toLowerCase().replace(/\s/g, '-').replace('?', '');


  return (
    <Box p={2} mt="auto" textAlign="center" display="flex" justifyContent="flex-end" flexWrap="wrap">
        <Button onClick={handleClickOpen} variant="contained" className={classes.gradient_dark} style={{marginTop: "8px", marginBottom:"8px", textTransform: "none"}}>Wybieram</Button>
        <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
            <Typography variant="h4">{props.title}</Typography></DialogTitle>
        <DialogContent>
            <Box display={fullScreen ? "block" : "flex"}>
            <Box flex="1">
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
                        Don???t fill this out:{" "}
                        <input name="bot-field" onChange={handleChange} />
                    </label>
                    </p>
                    <Box  display={fullScreen ? "block" : "flex"}>
                        <Box flex="1" pr={{sm: 4}}>
                        <Grid container spacing={2} justify="flex-start" alignItems="center">
                            <Grid item xs={12}>
                                <Typography variant="body1" style={{marginTop: "16px"}}>Dane kontaktowe:</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                required="true"
                                id="name"
                                label="Imi??"
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
                            </Grid>
                        </Box>
                        <Box pl={{sm: 4}} flex="1">
                            <Grid container spacing={2} justify="flex-start" alignItems="center">
                            <Grid item xs={12}>
                            <Typography style={{marginTop: "16px"}} variant="body1">Napisz jaki masz pomys?? na swoj?? stron??:</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    id="message"
                                    label="Wiadomo????"
                                    color="secondary"
                                    multiline
                                    rows={4}
                                    onChange={handleChange}
                                    fullWidth
                                    style={{color:"rgb(240, 56, 0)", marginTop: "4px"}}
                                    />
                                </Grid>
                             </Grid>
                        </Box>
                    </Box>
                    
                    
                </form>
            </Box>
            </Box>
        </DialogContent>
        <DialogActions style={{padding: "16px 24px"}}>
                        <Button onClick={handleClose} style={{marginLeft: "auto", textTransform: "none"}}>Zamknij</Button>
                        <Button form={formName} type="submit"  variant="contained" color="primary"  className={classes.gradient_dark} style={{textTransform: "none"}}>
                            Prosz?? o wycen??
                        </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

