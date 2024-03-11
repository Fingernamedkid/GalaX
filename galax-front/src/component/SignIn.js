import React, {useState} from "react";
import "./SignIn.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [status, setStatus] = useState(false)
    const [users, setUsers] = useState({
        nom:"",
        prenom:"",
        birthday:"",
        email:"",
        passwrd:""

    })
    const handleChange=(e) =>{
        const value = e.target.value;
        setUsers({...users,[e.target.name]: value})


    }
    const history = useNavigate();
    const submitNewClient = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5050/createU", users)
            .then((res ) => {
                if(res.data[0] === "Success"){
                    setStatus(true);
                    console.log(res.data[0]);
                    let path = '/verify/' + res.data[1]
                    window.location.href = path
                }else{
                    console.log(res.data);
                }
            }).catch((error) => {
            console.log(error);
        })
    }
    return(
        <div className="mt-5 container">
            <form method="post" onSubmit={(e) => submitNewClient(e) }>
                <h1 className="header">Veuillez-Vous Inscrire !</h1>

                <div className="case">
                    <label htmlFor="nom"><span>F</span>irst <span>N</span>ame: <span>*</span></label>
                    <input type="text" name="nom"
                           required
                           onChange={(e) => handleChange(e)}
                           value={users.nom}
                    />
                </div>

                <div className="case">
                    <label htmlFor="prenom">Last <span>N</span>ame: <span>*</span></label>
                    <input type="text" name="prenom"
                           required
                           onChange={(e) => handleChange(e)}
                           value={users.prenom}/>

                </div>

                <div className="case">
                    <label htmlFor="DDN"><span>DOB</span>: <span>*</span></label>
                    <input type="date" name="birthday"
                           required
                           onChange={(e) => handleChange(e)}
                           value={users.birthday}/>
                </div>


                <div className="case">
                    <label htmlFor="email"><span className="color_bleu">E</span>mail: <span className="color_bleu">*</span></label>
                    <input type="email" name="email"
                           required
                           onChange={(e) => handleChange(e)}
                           value={users.email}/>
                </div>

                <div className="case">
                    <label htmlFor="passwrd"><span  className="color_bleu">P</span>assword: <span  className="color_bleu">*</span></label>
                    <input type="password" name="passwrd"
                           required
                           onChange={(e) => handleChange(e)}
                           value={users.password}/>
                </div>



                <div className="checkbox">
                    <input type="checkbox" name="color1" value="red" /> <span className="color_coche">Avis de Confidentialité</span></div>
                <div className="checkbox">
                    <input type="checkbox" name="color2" value="green" /><span className="color_coche">Termes d'utilisation</span>
                </div>
                <div className="submit">

                    <button type="submit" className="btn btn-outline-success">Soumettre</button>
                </div>

            </form>
            {status?
                <h2></h2>:
                <h2>Registration Failed! Please try again.</h2>}

            <footer>
                <div className="social">  <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook"></i> </div>

                <h2>Copyright</h2>
            </footer>



        </div>


    );
}
export default SignIn;