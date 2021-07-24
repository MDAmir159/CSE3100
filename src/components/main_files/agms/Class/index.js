import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ClassHeader from '../Class/Components/ClassHeader';
import ClassBody from '../Class/Components/ClassBody'
import Peoples from '../Peoples';
import PostBox from './Components/PostBox';
import FacultyWindow from './Components/FacultyWindow';

const useStyles = makeStyles({
    root: {
        width: 800,
    },
});
function Class({ classDetails , xs1 , user_details , go_back_list}){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    console.log(classDetails.code_class);

    return (
        <div>
           {/* Header definition */}
           <ClassHeader title = {classDetails.name}  go_back_list = {go_back_list}/>
            {/* body definition */}
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Class Stream" />
                {(xs1 === "faculty") && (<BottomNavigationAction label="Students"/>)}
            </BottomNavigation>
            {
                (xs1 === "faculty") && (
                    <div>
                        {
                            (value === 0) && (
                                <FacultyWindow user_details = {user_details} classDetails = {classDetails} />
                            )
                        }
                        {
                            (value === 1) && (
                                <Peoples/>
                            )
                        }
                        
                    </div>
                )
            }
            {
                (xs1 === "student") && (
                    <div>
                        {
                            (value === 0) && (
                                <ClassBody user_details = {user_details} classDetails = {classDetails}/>
                            )
                        }
                    </div>
                )
            }
            
        </div>
    );
}
export default Class;