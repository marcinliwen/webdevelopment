import * as React from "react"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Sectiontitle = ({ title = 'Section title', subtitle}) => {
    return(
        <Box component="div" mb={20} mt={20}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant='body1'>{subtitle}</Typography>
        </Box>
    )
}

export default Sectiontitle;