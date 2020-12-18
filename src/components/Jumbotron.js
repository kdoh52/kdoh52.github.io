import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Image from '../images/sky.jpg'

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
        marginTop: "18%"
        // border: '2px solid',
        // backgroundColor: "#e6e6e6",
        // borderRadius: "20px"
    },
    // image: {
    //     backgroundImage: `url(${Image})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: "center center",
    //     backgroundRepeat: 'no-repeat',
    //     height: "500px",
    //     // position: 'relative',
    //     // top: "-90px",
    //     zIndex: '-1'
    // }
}))

export default function Jumbotron() {
    let classes = useStyles();

    return (
        <div className={classes.image}>
            <div className={classes.container}>
                <Typography className={classes.title} variant='h1' align="center">
                    Full Stack Web Developer & UI/UX Designer
                </Typography>
                <Typography className={classes.headline} variant='h2' align="center">
                    Building efficient and intuitive web applications
                </Typography>
            </div>
        </div>
    )
}
