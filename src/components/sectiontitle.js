import * as React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Paper from '@material-ui/core/Paper';


const Sectiontitle = ({ title = "Section title", subtitle }) => {
  return (
    <Box component="div" mb={4} mt={0}>
      {/*<Paper square elevation={0} style={{padding: "16px"}}>*/}
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
      {/*</Paper>*/}
    </Box>
  )
}

export default Sectiontitle
