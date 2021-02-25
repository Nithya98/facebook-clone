import React from "react";
import './App.css';
import Header from "./Header";
import SideBar from "./SideBar"
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import {useStateValue} from "./StateProvider"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{user}, dispatch]=useStateValue();

  return (
    <div className="app">   
    {!user ? (<Login />):(
      <>
          {/* Header */}
             <Header />
          {/*App Body*/}
             <div className="app__body">
          {/*Side bar*/}
              <SideBar />
          {/*Feed*/}
              <Feed />
          {/*Widgets*/}
             <Widgets />
            </div>
 
  </>

    )}
     </div>
  );

}

export default App;
