import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import FeaturesList from "./FeaturesList"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   // backgroundColor: theme.palette.background.paper,
  },
  card:{
      background: "transparent"
  }
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.card}>
        <Tabs 
         indicatorColor="primary"
         textColor="primary"
            value={value} 
            onChange={handleChange} 
            aria-label="simple tabs example" 
            variant="fullWidth">
          <Tab label="Opis" {...a11yProps(0)} />
          <Tab label="Funkcje" {...a11yProps(1)} />
        </Tabs>
      </Paper >
      <TabPanel value={value} index={0} style={{minHeight: "440px"}}>
        <Typography paragraph variant="body1" >{props.desc1}</Typography>
        <Box  display="flex" flexWrap="wrap" mb={2}> 
            {props.category.map((item)=>(
                <Box mr={2}>
                    <Typography>{item}</Typography>
                </Box>
            ))}
        </Box>
        <Typography variant="body1" >{props.desc}</Typography>
      </TabPanel>
      <TabPanel value={value} index={1} style={{minHeight: "440px"}}>
        <FeaturesList features={props.features} style={{marginTop: "auto"}}/>      
      </TabPanel>

    </div>
  );
}
