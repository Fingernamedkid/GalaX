import React, { useState } from "react";
import img from "../img/profil.png";
import { NavLink } from "react-router-dom";

export default function User() {
    const [editProfil, setEditProfil] = useState({
        username: "",
        passuser: "",
        email: ""
    });

    

    function handleClick(e) {
        setEditProfil({ ...editProfil, [e.target.name]: e.target.value });
    }

    return (
        <div className="pageUser">
            <NavLink to="/home">
                <i className="fa-solid fa-arrow-left" id="arrow-btn"
                    style={{ fontSize: "30px", marginBottom: "20px", color: "black", marginLeft: "50px", marginTop: "50px" }}
                ></i>
            </NavLink>

            <section className="section-profil">
                <img src={img} alt="" style={{ borderRadius: "50px 0 0 0" }} />
                <button className="btn-profil" onClick={handleClick}>
                    Edit
                </button>
            </section>

            <form className="form-user">
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={editProfil.username}
                        onChange={handleClick}
                        required
                    />
                    <button className="btn-user" type="button" onClick={handleClick}>
                        Edit
                    </button>
                </div>
                <div className="mb-3">
                    <label className="form-label">PassUser</label>
                    <input
                        type="text"
                        className="form-control"
                        name="passuser"
                        value={editProfil.passuser}
                        onChange={handleClick}
                        required
                    />
                    <button className="btn-user" type="button" onClick={handleClick}>
                        Edit
                    </button>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={editProfil.email}
                        onChange={handleClick}
                        required
                    />
                    <button className="btn-user" type="button" onClick={handleClick}>
                        Edit
                    </button>
                </div>
            </form>
        </div>
    );
}
