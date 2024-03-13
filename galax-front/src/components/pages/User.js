import React from "react";
import img from "../img/profil.png";
import { NavLink } from "react-router-dom";

export default function User() {


    return (
        <div className="pageUser">
                
            <NavLink to="/home"><i className="fa-solid fa-arrow-left" id="arrow-btn"
            style={{fontSize:"30px", marginBottom:"20px", color:"black", marginLeft:"50px", marginTop:"50px"}}
            ></i></NavLink>

            <section className="section-profil">
                <img src={img} alt="" style={{borderRadius:"50px 0 0 0"}} />
                <button
                    className="btn-profil">
                    Edit
                </button>
            </section>
            
            <form className="form-user">
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text"
                           className="form-control"
                           name="username"
                           required
                           
                    />
                    <button
                    className="btn-user">
                    Edit
                    </button>

                </div>
                <div className="mb-3">
                    <label className="form-label">PassUser</label>
                    <input type="text"
                              className="form-control"
                              name="passuser"
                              required
                             
                    />
                    <button
                    className="btn-user">
                    Edit
                    </button>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text"
                              className="form-control"
                              name="email"
                              required
                              
                    />
                    <button
                    className="btn-user">
                    Edit
                    </button>
                </div>
                <div className="mb-3">
                    <label className="form-label">Favorite Genre Movie</label>
                    <table className='table table-hover'>
                        <thead>
                        <tr>
                            <th>Fav1</th>
                            <th>Fav2</th>
                            <th>Fav3</th>
                            <th>Fav4</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <button
                    className="btn-user">
                    Edit
                </button>
                <div className="mb-3">
                    <label className="form-label">Favorite Genre Series</label>
                    <table className='table table-hover'>
                        <thead>
                        <tr>
                            <th>Fav1</th>
                            <th>Fav2</th>
                            <th>Fav3</th>
                            <th>Fav4</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <button
                    className="btn-user">
                    Edit
                </button>
                
            </form>
            


        </div>
    )
}



