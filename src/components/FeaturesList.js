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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
  },
  itemlist: {
    minHeight: "32px",
  },
  itemText: {
    "& span": {
      fontSize: "12px",
    },
  },
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
              onClick={handleToggle(index)}
            >
              <ListItemIcon style={{ minWidth: "24px" }}>
                <CheckIcon style={{ color: green[500], fontSize: "18px" }} />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={value}
                className={classes.itemText}
              />
            </ListItem>
          )
        })}
    </List>
  )
}
