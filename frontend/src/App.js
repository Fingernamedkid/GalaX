import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import OpenHome from "./components/OpenHome";
import NotFound from "./components/NotFound";
import CreateUsers from "./components/CreateUsers";
import UpdateUsers from "./components/UpdateUsers";
import Users from "./components/Users";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";

function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Routes>

    <Route path='/welcome' element={<OpenHome/>} />
    <Route path='/sign' element={<SignIn/>} />
    <Route path='/log' element={<LogIn/>} />
    <Route path='*' element={<NotFound/>} />
    <Route path='/create' element={<CreateUsers/>} />
    <Route path='/update' element={<UpdateUsers/>} />
    <Route path='/All' element={<Users/>} />




  </Routes>







</BrowserRouter>
    </div>
  );
}

export default App;
