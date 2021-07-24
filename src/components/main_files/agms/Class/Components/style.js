import { makeStyles } from "@material-ui/core";
import React from 'react'
import { Row } from "react-bootstrap";

export const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow : 1,
        marginLeft : '20%',
        // alignContent : 'center',
        
        //backgroundColor : 'blue'
    },
    box:{
        maxheight : '70%',
        maxWidth : '75%',
        backgroundColor: '#ebe6e6',
        borderRadius : 20,
        paddingLeft : '25px',
        paddingRight : '25px',
        paddingBottom : '30px',
        paddingTop : '15px'
    },
    box_xs:{
        
    },
    box_header:{
        display : 'flex',
        flexDirection : 'row',
        height : '5%',
        //backgroundColor : 'green'
    },
    box_container:{

    },
    header_avatar:{
        height:'50px',
        width :'50px',
        borderRadius : 50,
        backgroundColor : 'red',
    },
    post_details:{
        //backgroundColor : 'blue',
        paddingTop : 10,
        paddingLeft : 8,
        paddingBottom : 10
    },
    media_container : {
        display : 'flex',
        flexDirection : 'row'
    },
    media_container_unit :{
        marginLeft : '10px'
    }

}));