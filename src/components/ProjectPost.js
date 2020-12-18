import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import codersCornerImg from "../images/coders-corner.png"


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(1),
        },
        // marginBottom: "0px"
    },
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
    description: {
        fontSize: "1em",
        // fontWeight: "lighter"
        // marginTop: 20
        '@media (min-width:650px)': {
            fontSize: '1.1rem',
        },
        color: 'white',
        marginBottom: "10px"
    },
    link: {
        fontSize: "1em",
        fontWeight: "500",
        // marginTop: 20
        '@media (min-width:650px)': {
            fontSize: '1.1rem',
        },
    },
    a: {
        // color: "#29AAE2"
        color: "white",
        backgroundColor: "white"

    },
    container: {
        // backgroundColor: "#1B75BC",
        backgroundColor: "#2c84c9",
        margin: "5%",
        padding: "5%",
        borderRadius: '20px'
    },
    image: {
        width: '40%',
        marginBottom: "15px"
    }
}))

export default function ProjectPost(props) {
    let classes = useStyles();

    return (
        <div className={classes.container}>
            {/* <p>{props.id}</p> */}
            <Typography className={classes.title} variant='h1'>
                {props.title}
            </Typography>
            {/* <p>{props.image}</p> */}
            <img className={classes.image} src={props.image} alt="test"/>

            <Typography className={classes.description} variant='h2'>
                {props.description}
            </Typography>

            {/* <Typography className={classes.link} variant='h2'>
                <a className={classes.a} href={props.appLink} target="_blank">Application</a>
            </Typography>
            <Typography className={classes.link} variant='h2'>
                <a className={classes.a} href={props.repoLink} target="_blank">GitHub Repository</a>
            </Typography> */}
            <div className={classes.root}>
                <ButtonGroup className={classes.a} aria-label="outlined button group">
                    <Button href={props.appLink} target="_blank">Application</Button>
                    <Button href={props.repoLink} target="_blank">Repository</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
