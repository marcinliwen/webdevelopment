import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import CommentIcon from "@material-ui/icons/Comment"
import CheckIcon from "@material-ui/icons/Check"
import { green } from "@material-ui/core/colors"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "auto"

    // backgroundColor: theme.palette.background.paper,
  },
  itemlist: {
    minHeight: "32px",
  },
  itemText: {
    "& span": {
      fontSize: "16px",
    },
  },
  itemTExtFirst:{
    "& span": {
        fontWeight: "600",
        fontSize: "16px",
      },
  }
}))

export default function CheckboxList({ features }) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState([0])

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List className={classes.root}>
      {features &&
        features.map((value, index) => {
          const labelId = `checkbox-list-label-${index}`

          return (
            <ListItem
              className={classes.itemlist}
              key={index}
              role={undefined}
              dense
              button
              disableGutters={true}
              onClick={handleToggle(index)}
              disabled={value.active ? false : true}            
            >
              <ListItemIcon style={{ minWidth: "24px" }}>
                <CheckIcon style={{ color: green[500], fontSize: "18px" }} />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={value.title}
                className={index=== 0 ? classes.itemTExtFirst : classes.itemText}
              />
              
            </ListItem>
          )
        })}
        <Box  textAlign="center" display="flex" justifyContent="space-evenly" flexWrap="wrap" >
          <Button variant="contained" color="secondary" style={{marginTop: "8px", marginBottom:"8px"}}>Dodaj funkcje</Button>
        </Box>
    </List>
  )
}
