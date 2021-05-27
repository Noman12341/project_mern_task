import React from 'react';
import { AppBar, Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.appBar} position="static">
            <Box className={classes.brandContainer}>
                <Typography className={classes.heading} component={Link} to="/" variant="h4" align="center">React MarkDown & Wiki Search</Typography>
            </Box>
            <Box>
                <Button component={Link} to="/history" variant="contained" color="primary">View History</Button>
            </Box>
        </AppBar>
    );
}
export default Navbar;