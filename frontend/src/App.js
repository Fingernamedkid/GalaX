import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import OpenHome from "./components/OpenHome";
import NotFound from "./components/NotFound";
import CreateUsers from "./components/CreateUsers";
import UpdateUsers from "./components/UpdateUsers";
import Users from "./components/Users";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";
import PassForgot from "./components/PassForgot";

function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Routes>

    <Route path='/' element={<OpenHome/>} />
    <Route path='/sign' element={<SignIn/>} />
    <Route path='/log' element={<LogIn/>} />
    <Route path='/passRemove' element={<PassForgot/>} />

    <Route path='/create' element={<CreateUsers/>} />
    <Route path='/update' element={<UpdateUsers/>} />
    <Route path='/All' element={<Users/>} />
    <Route path='*' element={<NotFound/>} />





  </Routes>







</BrowserRouter>
    </div>
  );
}

export default App;
