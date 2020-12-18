import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {LinkedIn, GitHub, Email, YouTube, PhoneIphone } from "@material-ui/icons"
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles(theme => ({
    title: {
        fontSize: "1.5em",
        // fontWeight: "lighter"
        // marginTop: 20
        '@media (min-width:650px)': {
            fontSize: '2rem',
        },
        marginBottom: "15px",
        color: 'white'
    },
    container: {
        // backgroundColor: "#1B75BC",
        backgroundColor: "#cfcfcf",
        margin: "10%",
        marginTop: "20px",
        marginBottom: "10px",
        padding: "5%",
        borderRadius: '20px'
    },
    icon: {
        fontSize: "3.5em"
    },
    icon2: {
        fontSize: "3.5em",
        color: "#29AAE2",
        color: "#2c84c9"
    },
    container2: {
        display: "flex",
        justifyContent: "space-between",
        margin: "15%",
        marginTop: "0px",
        marginBottom: "10%",
    }
}))

export default function ProjectPost(props) {
    let classes = useStyles();

    return (
        <div>
            <div className={classes.container2}>
                <a href="https://www.linkedin.com/in/kdoh/"><LinkedIn className={classes.icon2}/></a>
                <a href="https://github.com/kdoh52"><GitHub className={classes.icon2}/></a>
                <a href="mailto:kdoh52@gmail.com"><Email className={classes.icon2}/></a>
                <a href="tel:408-960-5481"><PhoneIphone className={classes.icon2}/></a>
                <a href="https://www.youtube.com/c/kdoh-music"><YouTube className={classes.icon2}/></a>
            </div>
            {/* <div className={classes.container}>
                <GitHub className={classes.icon}/>
                <Typography className={classes.title} variant='h1'>
                    {props.title}
                </Typography>
            </div>
            <div className={classes.container}>
                <Email className={classes.icon}/>
                <Typography className={classes.title} variant='h1'>
                    {props.title}
                </Typography>
            </div>
            <div className={classes.container}>
                <PhoneIphone className={classes.icon}/>
                <Typography className={classes.title} variant='h1'>
                    {props.title}
                </Typography>
            </div>
            <div className={classes.container}>
                <YouTube className={classes.icon}/>
                <Typography className={classes.title} variant='h1'>
                    {props.title}
                </Typography>
            </div> */}
        </div>
    )
}
