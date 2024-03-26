import React, {useState} from "react";
import "./cssdiectory/SignIn.css";
import axios from 'axios';

//import {useNavigation} from "react-router-dom";


function SignIn() {
    const [users, setUsers] = useState({
        first_name:"",
        last_name:"",
        date:"",
        email:"",
        password:""

    })
    const handleChange=(e) =>{
        const value = e.target.value;
        setUsers({...users,[e.target.name]: value})


    }

    //const navigate= useNavigation();
    const submitNewClient = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5050/createU", users)
            .then((res ) => {
                console.log("Client Ajouté");
             //   navigate("/sign")
            }).catch((error) => {
            console.log(error);
        })
    }
    return(
        <div>

        <div className="mt-5 container">

            <form method="post" onSubmit={(e) => submitNewClient(e) }>
                <h1 className="headerr">Veuillez-Vous Inscrire !</h1>

                <div className="case">
                    <label htmlFor="firstname"><span>F</span>irst <span>N</span>ame: <span>*</span></label>
                    <input type="text" name="first_name"
                           required
                           onChange={(e) => handleChange(e)}
                           value={users.first_name}
                    />
                </div>

                <div className="case">
                    <label htmlFor="lastname">Last <span>N</span>ame: <span>*</span></label>
                    <input type="text" name="last_name"
                           required
                           onChange={(e) => handleChange(e)}
                           value={users.last_name}/>

                </div>

                <div className="case">
                    <label htmlFor="DDN"><span>DOB</span>: <span>*</span></label>
                    <input type="date" name="date"
                           required
                           onChange={(e) => handleChange(e)}
                           value={users.date}/>
                </div>


                <div className="case">
                    <label htmlFor="email"><span className="color_bleu">E</span>mail: <span className="color_bleu">*</span></label>
                    <input type="email" name="email"
                           required
                           onChange={(e) => handleChange(e)}
                           value={users.email}/>
                </div>

                <div className="case">
                    <label htmlFor="password"><span  className="color_bleu">P</span>assword: <span  className="color_bleu">*</span></label>
                    <input type="password" name="password"
                           required
                           onChange={(e) => handleChange(e)}
                           value={users.password}/>
                </div>



                <div className="checkbox">
                    <input type="checkbox" name="color1" value="red" /> <span className="color_coche">Avis de Confidentialité</span>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="color2" value="green" /><span className="color_coche"> Termes d'utilisation</span>
                </div>

                <div className="submit">

                    <button type="submit" className="btn btn-outline-success">Soumettre</button>
                </div>

            </form>


            <footer>
                <div className="social">  <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook"></i> </div>

                <h2>Copyright</h2>
            </footer>

        </div>




        </div>
    );
}
export default SignIn;