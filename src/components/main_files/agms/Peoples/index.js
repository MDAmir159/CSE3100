import { Divider, Grid, Typography , Switch , withStyles , Button} from '@material-ui/core';
import React, { Component , useState } from 'react';
import { useStyles } from './style';
import demoPeople from '../../../../data/demoPeople';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./style.css"
import { doc, updateDoc } from "firebase/firestore";
import db from '../../../../util/getFireStore'



const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);
  var ListOfPeople = [
    {
        name : "MD Amirul Islam",
        imaage_link : null,
        status : false
    },
    {
        name : "Anwar Mumit",
        imaage_link : null,
        status : true
    },
    {
        name : "Mainuddin Shadhin",
        imaage_link : null,
        status : false
    },
    {
        name : "Redowan Ahmed",
        image_link : null,
        status : true
    },

];

function Peoples({classDetails}) {

    // const [intel, setIntel] = useState(ListOfPeople);
    const [trigger, setTrigger] = useState(true);
    const [open, setOpen] = React.useState(false);
    const [intel, setIntel] = useState(classDetails.students)
    // const [selectedCode, setSelectedCode] = useState(classDetails.)

    const style = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async() => {
        setOpen(false);
        //console.log(intel);
        /// saving intel to database

        /// This is the final functionality we're
        /// gonna include to this hell...
        /// let us end this

        const intelRef = doc(db, "class_codes" , classDetails.code_class );

        await updateDoc(intelRef, {
            students : intel
        });
    };


    const savingValue = () =>{

        handleClickOpen();
    }

    const PeopleList = (e) =>{

        const [state, setState] = React.useState(e.value);

        const handleChange = (event) => {
            setTrigger(false);
            var tempObj = state;
            // console.log(tempObj);
            tempObj.auth = event.target.checked;
            setState({ ...state, status : tempObj.auth });
            let newArray = [...intel];
            newArray[e.index] = tempObj;
            setIntel(newArray);
            // ListOfPeople[e.index].status = tempObj.status;
        //   setIntel({...intel ,  })

        };

        // console.log(state);

        return(
              <div  className = "root">
                  <div className = "elements">

                      <div className = "fundamentals_options">
                            <Switch
                                checked={state.auth}
                                onChange={handleChange}
                                name = {state.name}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                      </div>
                      <div className = "fundamentals_status">
                            <h6>
                                {state.status ? "In" : "Out"}
                            </h6>
                      </div>
                      <div className = "fundamentals_avatar">

                      </div>

                      <div className = "fundamentals_name">

                              <label> {state.name} </label>
                      </div>
                  </div>
                  <br/>
              </div>

        );
    }

    //const intel = demoPeople;
    // const intel = ListOfPeople;

    return(
        <div>
            <div className = "confirm_button" >
                <Button variant="contained" onClick = {savingValue} disabled = {trigger} >
                    ChangeIt
                </Button>
            </div>

            <ul type = "none">
                {intel.map((item , index) => <PeopleList key = {index} index = {index} value = {item} />)}
                {/* <Flatlist list = {intel} renderItem = { <PeopleList item = {intel}/> } /> */}
            </ul>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        By clicking <b>"CONFIRM"</b> you are going to save all of the changes you have done
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Discard
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}
export default Peoples;