import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import profPic from '../images/profile-pic.jpg'

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: "2.5em",
        // fontWeight: "lighter"
        // marginTop: 20
        '@media (min-width:650px)': {
            fontSize: '3rem',
        },
    },
    headline: {
        fontSize: "1.4em",
        marginTop: 10,
        '@media (min-width:650px)': {
            fontSize: '1.8rem',
        },
        // marginBottom: 25
    },
    container: {
        margin: "10%",
        marginTop: "18%",
        marginBottom: "6%"
        // border: '2px solid',
        // backgroundColor: "#e6e6e6",
        // borderRadius: "20px"
    },
    image: {
        width: "30%",
        display: "flex",
        margin: "auto",
        marginTop: '20px',
        borderRadius: '50%'
    }
}))

export default function About() {
    let classes = useStyles();

    return (
            <div className={classes.container}>
                <Typography className={classes.title} variant='h1' align="center">
                    Let's Connect!
                </Typography>
                <Typography className={classes.headline} variant='h2' align="center">
                    This is where you can find me
                </Typography>
                {/* <img className={classes.image} src={profPic}/> */}
            </div>
    )
}
