import React, {useState} from "react";

import axios from 'axios';;
import "./LogIn.css";


function LogIn() {
    const [users, setUsers] = useState({
        nom:"login",
        prenom:"login",
        birthday:"",
        email:"",
        passwrd:""

    })
    const handleChange=(e) =>{
        const value = e.target.value;
        setUsers({...users,[e.target.name]: value})


    }

    const submitClient = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5050/loginU", users)
            .then((res ) => {
                if(res.data[0] === "Success"){
                    console.log(res.data[0]);
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
            <form action="" method="post">
                <h1 className="header">Log In</h1>

                    <div className="case">
                        <label htmlFor="email"><span className="color_bleu">E</span>mail: <span className="color_bleu">* </span></label>
                        <input type="email" name="email" />
                    </div>

                    <div className="case">
                        <label htmlFor="password"><span  className="color_bleu">P</span>assword: <span  className="color_bleu">* </span></label>

                        <input type="password" name="password" />
                    </div>

                <div className="checkbox">
                    <input type="checkbox" name="color1" value="red" /> <span className="color_coche">J'ai oublié mon mot de passe</span>
                </div>


                        <div className="submit">

                            <button type="submit" className="btn btn-outline-success" onClick={submitClient}>Connexion</button>
                        </div>
                </form>

                    <footer>
                        <div className="social">  <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook"></i> </div>

                        <h2>Copyright</h2>
                    </footer>


        </div>
);
}
export default LogIn;