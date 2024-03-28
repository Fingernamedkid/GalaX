import React from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Films from "./components/pages/Films";
import User from "./components/pages/User";
import Series from "./components/pages/Series";
import FAQ from "./components/pages/FAQ";
import Home from "./components/pages/Home";
import SideMenu from "./components/SideMenu";
import Item from "./components/pages/Item";
//********************** */
import OpenHome from "./component/OpenHome";
import NotFound from "./component/NotFound";
import CreateUsers from "./component/CreateUsers";
import UpdateUsers from "./component/UpdateUsers";
import Users from "./component/Users";
import SignIn from "./component/SignIn";
import LogIn from "./component/LogIn";

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Routes>
        <Route path="/films" element={<Films />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/film/:id" element={<Item />}></Route>
        <Route path="/side" element={<SideMenu />}></Route>
        <Route path="*" element={<SideMenu />}></Route>
        <Route path='/' element={<OpenHome/>} />
    <Route path='/sign' element={<SignIn/>} />
    <Route path='/log' element={<LogIn/>} />
    <Route path='/create' element={<CreateUsers/>} />
    <Route path='/update' element={<UpdateUsers/>} />
    <Route path='/All' element={<Users/>} />
    <Route path='*' element={<NotFound/>} />

      </Routes>
      
    </div>
  );
}

export default App;
