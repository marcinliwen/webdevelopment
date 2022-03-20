import React from 'react';
import { Link } from "gatsby"
import { useState, useEffect } from "react"
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Menuburger from "./Menuburger"


const useStyles = makeStyles({
  list: {
    width: 250,
    maxWidth: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
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
  },
  burgerbtn: {
    transition: 'all 450ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    transform: 'translateX(-60px)',
    '&:hover':{
      transition: 'all 450ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      transform: 'translateX(-5px)'
    }
  },
  burgerConteiner: {
    position: "fixed", 
    top: '0px', 
    //transform: 'translateY(-50%)', 
    right: "0px",
    zIndex: '999'
  }
});

const Menubutton = withStyles((theme) => ({
  root:{
    borderRadius: '0',
    textAlign: 'center',
  }
}))(Button);

const Burgerbutton = withStyles((theme) => ({
  root:{
    textAlign: 'center',
    padding: '0px',
    margin:'0px'
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
    case 4:
      return '#kontakt'

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
    //console.log('menu')
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const burgerMenuClickHandler = () =>{
    if(document.querySelector('main').classList.contains('is-open')){
      
      document.querySelector('main').classList.remove('is-open-rotate')
      document.body.classList.remove('menu-position')
      setTimeout(()=>{
        document.querySelector('main').classList.remove('is-open');
        document.querySelector(".wrapper-perspective").classList.remove("menu-is-open")
        document.body.classList.remove('menu-helper')
      }, 700)
    }else{
      
      document.querySelector('main').classList.add('is-open');
      document.querySelector('main').classList.add('is-open-rotate')
      document.querySelector(".wrapper-perspective").classList.add("menu-is-open");
      document.body.classList.add('menu-helper');
      setTimeout(()=>{
        document.body.classList.add('menu-position')
      }, 700)
    }
  }

  const menuClickCloseMenu = (id) =>{
    return new Promise( (resolve)=>{
      if(document.querySelector('main').classList.contains('is-open')){
        resolve(burgerMenuClickHandler())
      };
    })
  }

  const menuClickHandler =(id)=>{
    burgerMenuClickHandler()
    setTimeout(()=>{
      scrollTo(id)
    },900)
  }
  const List = (anchor) => (
    <div
      className="menu-list"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul>
        {['Home', 'Oferta', 'Etapy', 'Realizacje', 'Kontakt' ].map((text, index) => (
          <li style={{padding: '0', margin:'0'}}>
          <a 
            //href={getIdforLink(index)} 
            key={text}
            className={classes.menuButton}
            onClick={() => menuClickHandler(getIdforLink(index))}
            >
            <p style={{fontSize: '1.5rem'}} >{text}</p>
          </a>
          </li>
          
        ))}
      </ul>
    </div>
  );
const anchor = 'right';

  return (
    <div>
      {/*{['left', 'right', 'top', 'bottom'].map((anchor) => (*/}
        <React.Fragment key={anchor} >
          {/*<Box className={classes.burgerConteiner}>
            <a style={{display: "block"}} onClick={toggleDrawer(anchor, true)} >
              <DehazeIcon style={{ fontSize: 44 }} />
            </a>
      </Box>*/}
          <Menuburger  onCLickMe={burgerMenuClickHandler}/>
          <List />
          
        </React.Fragment>
      {/*}))}*/}
    </div>
  );
}
