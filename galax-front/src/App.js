import React from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Films from "./components/pages/Films";
import User from "./components/pages/User";
import Series from "./components/pages/Series";
import FAQ from "./components/pages/FAQ";
import Home from "./components/pages/Home";
import SideMenu from "./components/SideMenu";
import About from "./components/pages/About";
import MsgValidation from "./components/MsgValidation";
import Item from "./components/pages/Item";
import ChoiceGenres from "./components/ChoiceGenres";
import Tv from "./components/pages/Tv";
import Favorite from "./components/pages/FavoriteEverything"
//********************** */
import OpenHome from "./components/OpenHome";
import NotFound from "./components/NotFound";
import CreateUsers from "./components/CreateUsers";
import UpdateUsers from "./components/UpdateUsers";
import Users from "./components/Users";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";
import VerifyEmail from "./components/VerifyEmail";


/**TODO Cookie verification, protected route
 **/

function App() {

  return (
    <div className="App" style={{ width: "100%"}}>
      <Routes>
        
        <Route path="/films" element={<Films />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/validation" element={<MsgValidation/>} />
        <Route path="/movie/:id" element={<Item />}></Route>
        <Route path="/tv/:id" element={<Tv />}></Route>
        <Route path="/side" element={<SideMenu />}></Route>
        <Route path="*" element={<SideMenu />}></Route>
        <Route path="/choice/:id" element={<ChoiceGenres/>}/>
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/' element={<OpenHome/>} />
        <Route path="/verify/:iduser" element={<VerifyEmail />}/>
        <Route path='/sign' element={<SignIn/>} />
        <Route path='/log' element={<LogIn/>} />
        <Route path='/create' element={<CreateUsers/>} />
        <Route path='/update' element={<UpdateUsers/>} />
        <Route path='/All' element={<Users/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
      
    </div>
  );
  /****
   * https://hasura.io/blog/best-practices-of-using-jwt-with-graphql#basics-login
   * Need to do more research on this
   * 
   */
}

export default App;
