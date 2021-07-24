import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
    root:{
        //flexGrow : 1,
        //alignItems : 'center',
        //backgroundColor : 'red',
    },
    elements:{
        display : 'flex',
        height : '60px',
        Width : '50px',
        backgroundColor : '#dbdbd3',
        borderRadius : '20px',
        flexDirection : 'row',
        marginLeft : '25%',
        alignItems : 'center',
        marginRight : '25%'
        
    },
    fundamentals_avatar:{
        backgroundColor : 'red',
        height : '50px',
        width : '50px',
        borderRadius : '50%',
        marginLeft : '5px',
        alignContent : 'center',
        justifyContent : 'center'
    },
    fundamentals_name:{
        minWidth : '10px',
        marginLeft : '10px'
    },
    fundamentals_options:{
        backgroundColor : 'blue',
        // height : '35px',
        width : '35px',
        // borderRadius : '50%',
         //marginRight: '30px',
        marginLeft : '10px'
    },
    fundamentals_status:{
        backgroundColor : 'red',
        textAlign : 'center',
        marginLeft : '30px',
        width : '50px'
    },
    confirm_button:{
        backgroundColor : 'blue',
        width : '10px',
        marginLeft: '85%',
    }

}));