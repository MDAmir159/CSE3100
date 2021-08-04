import React from 'react';
import LogIn from './components/main_files/LogIn';
import Student from './components/main_files/agms/Student/index'
import Faculty from './components/main_files/agms/Faculty/index';
import { Route , BrowserRouter , Switch } from 'react-router-dom';
import Test from './Test';
import Peoples from './components/main_files/agms/Peoples';
import Class from './components/main_files/agms/Class/index'
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import Test1 from '../src/Test1'
import ClassBody from './components/main_files/agms/Class/Components/ClassBody';
import Test2 from '../src/Test2'
import GoogleFontLoader from 'react-google-font-loader';
import Routes from './Routes'
// import Test from '../src/Test.js'

function App() {
    <GoogleFontLoader
      fonts={[
          {
              font: 'Bungee Inline',
              weights: [400],
          },
      ]}
    />
  
  return (
    <Routes />
    //<Test/>
    //<LogIn/>
    //<FirebaseDatabaseProvider>
       //<LogIn/>
    //</FirebaseDatabaseProvider>
    
    //
    
    //<Peoples/>
    //<ClassBody/>
    //<Faculty/>
    //<Student/> 
    //<Class xs1 = "student"/>
    //<Class xs1 = "faculty"/>
    //<Test1/>

    //<Test2/>

    // <div className="container" style={{ width: "600px" }}>
    //   <div className="my-3">
    //     <h3>bezkoder.com</h3>
    //     <h4>React Hooks Multiple Files Upload</h4>
    //   </div>

    //   <FilesUpload/>
    // </div>
    
  );
}

export default App;
