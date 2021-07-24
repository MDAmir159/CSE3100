import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
    root:{
        display : 'flex',
        flexDirection : 'row'
    },
    back_button:{
        //backgroundColor : 'blue',
    },
    title:{
        //backgroundColor : 'red',
        marginLeft : '500px'
    }
}));

function ClassHeader({title , go_back_list}){

    const classes = useStyles();

    return(
        <div className = {classes.root}>
            <div className = {classes.back_button}>
            <Button
                variant="contained"
                className={classes.back_button}
                startIcon={<HomeIcon />}
                onClick = {go_back_list}
            >
                goto all classes
            </Button>
            </div>
            <div className = {classes.title}>
                <h2>{title} </h2>
            </div>
            
        </div>
    );
}
export default ClassHeader;