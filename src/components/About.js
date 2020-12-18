import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Image from '../images/sky.jpg'

const useStyles = makeStyles(theme => ({
    description: {
        fontSize: "0.9em",
        lineHeight: "1.5em",
        // fontWeight: "lighter"
        // marginTop: 20
        '@media (min-width:650px)': {
            fontSize: '1em',
        },
    },
    container: {
        margin: "10%",
        marginTop: "0px"
    }
}))

export default function About() {
    let classes = useStyles();

    return (
        <div className={classes.image}>
            <div className={classes.container}>
                <Typography className={classes.description} variant='h1' align="center">
                    I'm a full stack web developer and UI/UX designer based in San Jose, CA. From front to back, my comprehensive knowledge of MERN stack and design helps me to create both functional and intuitive applications.
                </Typography>
                <br />
                <Typography className={classes.description} variant='h1' align="center">
                    I am a graduate of the UC Davis design program, as well as their Continuing and Professional Education Web Development Bootcamp.
                </Typography>
                <br />
                <Typography className={classes.description} variant='h1' align="center">
                    Thank you for visiting my site! Please feel free to contact me and learn more about the work I do!
                </Typography>

                <br />
                <br />
                <Typography className={classes.description} variant='h1' align="center">
                    <a href="kdoh-resume.pdf" download>Resume</a>         
                </Typography>
                {/* <Typography className={classes.headline} variant='h2' align="center">
                    Building efficient and intuitive web applications
                </Typography> */}
            </div>
        </div>
    )
}
