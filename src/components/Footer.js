import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {

    },
    published: {
        fontSize: "1em",
        // fontWeight: "lighter"
        // marginTop: 20
        '@media (min-width:650px)': {
            fontSize: '1rem',
        },
    },
    copyright: {
        fontSize: "0.9em",
        // fontWeight: "lighter"
        // marginTop: 20
        '@media (min-width:650px)': {
            fontSize: '0.9rem',
        },
        marginBottom: "30px"
    }
}))

export default function Footer() {
    let classes = useStyles();
    
    return (
        <div className={classes.footer}>
            <Typography className={classes.published} align="center">Published by Kevin Doh</Typography>
            <Typography className={classes.copyright} align="center">Copyright © 2020</Typography>
        </div>
    )
}
