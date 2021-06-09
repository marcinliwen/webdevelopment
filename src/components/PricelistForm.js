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
    }
  }));

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles()


  return (
        <Box pt={2} pb={1} mt="auto" textAlign="center" display="flex" justifyContent="space-evenly" flexWrap="wrap" >
            <Button onClick={handleClickOpen} variant="contained" className={classes.gradient_dark, classes.btnList} style={{marginTop: "8px", marginBottom:"8px"}}>Wybieram</Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
        <FeaturesList features={props.features} />
          <PricelistFormForm title={props.title} closeForm={handleClose}/>
        </DialogContent>
        {/*<DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>*/}
      </Dialog>
      </Box>
  );
}
