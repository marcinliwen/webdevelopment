import React from 'react';
import { Link } from "gatsby"
import { useState, useEffect } from "react"
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import scrollTo from 'gatsby-plugin-smoothscroll';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuBtIcon:{
    opacity: '0',
    transition: 'all 450ms cubic-bezier(0.4, 0, 0.2, 1) 50ms',
    transform: 'translateX(-10px)'
  },
  menuButton: {
    '&:hover $menuBtIcon':{
        opacity: '1',
        transition: 'all 450ms cubic-bezier(0.4, 0, 0.2, 1) 50ms',
        transform: 'translateX(0px)'
    }
  }
});

const Menubutton = withStyles((theme) => ({
  root:{
    borderRadius: '0',
    textAlign: 'center',
  }
}))(Button);


function getIdforLink(index){
  switch(index){
    case 0:
      return '#hero-home';
    case 1:
      return '#products';
    case 2:
      return '#steps';
    case 3:
      return '#realisations'

  }
}

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Cennik', 'Kroki', 'Realizacje'].map((text, index) => (
          <ListItem style={{padding: '0', margin:'0'}}>
          <Menubutton 
            href={getIdforLink(index)} 
            key={text}
            disableFocusRipple={true}
            disableRipple={true}
            disableElevation={true}
            fullWidth={true}
            className={classes.menuButton}
            >
            <ListItemText primary={text} />
            <ChevronRightIcon  className={classes.menuBtIcon}/>
          </Menubutton>
          </ListItem>
          
        ))}
      </List>
    </div>
  );
const anchor = 'left';

  return (
    <div>
      {/*{['left', 'right', 'top', 'bottom'].map((anchor) => (*/}
        <React.Fragment key={anchor}>
          <IconButton  onClick={toggleDrawer(anchor, true)} style={{position: "fixed", bottom: '15px', right: "15px"}}>
              <AddIcon />
          </IconButton>
          <Button variant="contained" color="#00c0f1" onClick={toggleDrawer(anchor, true)} style={{position: "fixed", top: '15px', left: "15px", background: '#00c0f1'}}>MENU</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      {/*}))}*/}
    </div>
  );
}
