import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navbar: {
        backgroundColor: "#21409A",
        // backgroundColor: "#1B75BC",
        // backgroundColor: "#29AAE2",
    }
}));

export default function Navbar() {
    const classes = useStyles();
    // const theme = theme;

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.navbar}>
                <Typography variant="h6" className={classes.title}>
                    Kevin Doh
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
