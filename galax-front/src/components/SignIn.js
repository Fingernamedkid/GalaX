import React, {useState} from "react";
import "./cssdiectory/SignIn.css";
import axios from 'axios';

function SignIn() {
    const [status, setStatus] = useState(true)
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

    const submitNewClient = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5050/createU", users)
            .then((res ) => {
                if(res.data[0] === "Success"){
                    setStatus(false);
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
        <div id={"backC"}>

        <div id="head">

            <h1 id="headerr">Veuillez-Vous Inscrire !</h1>

        </div>
        <div id="formSign">

            <form method="post" onSubmit={(e) => submitNewClient(e) }>

                <div className="case">
                    <label htmlFor="first_name"><span>F</span>irst <span>N</span>ame: <span>*</span></label>
                    <input type="text" name="first_name"
                           required
                           onChange={(e) => handleChange(e)}
                           value={users.first_name}
                           />
                </div>

                <div className="case">
                    <label htmlFor="last_name">Last <span>N</span>ame: <span>*</span></label>
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
                           devalue={users.password}/>
                </div>



                <div id="checkbox">
                    <input id={"checkb"} type="checkbox"/> <span>  Avis de Confidentialité </span>
                </div>
                <div id="checkbox">
                    <input id={"checkb"} type="checkbox"/><span> Termes d'utilisation </span>
                </div>

                <div id="submit">

                    <button type="submit" className="btn btn-outline-success">Soumettre</button>
                </div>

            </form>
            {!status && <h2>Registration Failed! Please try again.</h2>}

            <footer>
                <div id="social">  <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook"></i> </div>

                <h2>Copyright</h2>
            </footer>

                </div>


        </div>


    );
}
export default SignIn;