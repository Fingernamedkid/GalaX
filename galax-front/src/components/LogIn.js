import React, {useState} from "react";
import Cookies from 'universal-cookie';
import axios from 'axios';
import "./cssdiectory/LogIn.css";


function LogIn() {
    const [users, setUsers] = useState({
        first_name:"login",
        last_name:"login",
        date:"",
        email:"",
        password:""

    })
    const handleChange=(e) =>{
        const value = e.target.value;
        setUsers({...users,[e.target.name]: value})
    }

    const cookies = new Cookies(null, { path: '/' });


    const submitClient = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5050/loginU", users)
            .then((res ) => {
                if(res.data[0] === "Success"){
                    console.log(res.data[0]);
                    cookies.set("auth",res.data[1])
                    let path = '/home'
                    window.location.href = path
                }else{
                    console.log(res.data);
                }
            }).catch((error) => {
            console.log(error);
        })
    }
    return(
        <div>
            <header>
                <h1 className="headerL">Log In</h1>
            </header>

            <form className={"form2"} action="" method="post">

                    <div className="case">
                        <label htmlFor="email"><span className="color_bleu">E</span>mail: <span className="color_bleu">* </span></label>
                        <input type="email" name="email"
                           required
                           onChange={(e) => handleChange(e)}
                           devalue={users.email}/>
                    </div>

                    <div className="case">
                        <label htmlFor="password"><span  className="color_bleu">P</span>assword: <span  className="color_bleu">* </span></label>

                        <input type="password" name="password"
                              required
                              onChange={(e) => handleChange(e)}
                              devalue={users.password}/>
                        
                    </div>

                        <div className="submit">

                            <button type="submit" className="btn btn-outline-success" onClick={submitClient}>Connexion</button>
                        </div>

                <div className="linkpass">
                    <li><a  className="" href="/passRemove">Mot de Passe Oublier</a></li>

                </div>
                </form>

            <footer>
                <div className="social">  <i className="fa-brands fa-instagram"></i> </div>
                <div className="social">     <i className="fa-brands fa-facebook"></i> </div>

                <h2>Copyright</h2>
            </footer>



        </div>
);
}
export default LogIn;   