import React from "react";
import img from "../img/profil.png";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function User() {


    return (
        <div className="pageUser">
            <NavLink to="/home">
                <i className="fa-solid fa-arrow-left" id="arrow-btn"
                    style={{ fontSize: "30px", marginBottom: "20px", color: "black", marginLeft: "50px", marginTop: "50px" }}
                ></i>
            </NavLink>

            <div className="container bootstrap snippets bootdey">
            <h1 className="text-primary">Edit Profile</h1>
            <hr/>
            <div className="row">
            
            <div className="col-md-9">
                <div className="text-center">
                <img src={img} class="avatar img-circle img-thumbnail" alt="avatar"/>
                <h6>Upload a different photo...</h6>
                
                <input type="file" className="form-control"/>
            </div>
            </div>
      
      
      <div className="col-md-15 personal-info">
        <div className="alert alert-info alert-dismissable" style={{marginLeft:"150px", marginTop:"50px"}}>
          <a className="panel-close close" data-dismiss="alert"></a> 
          <i className="fa fa-coffee"></i>
          This is an <strong>.alert</strong>. Use this to show important messages to the user.
        </div>
        <h3 style={{marginLeft:"150px"}}>Personal info</h3>
        
        <form className="form-horizontal" role="form" style={{marginLeft:"150px"}}>
          <div className="form-group">
            <label className="col-lg-3 control-label">First name:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" placeholder="firstname" style={{width:'500px'}}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label">Last name:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" placeholder="lastname"  style={{width:'500px'}}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label">Are you a adult?:</label>
            <div className="col-lg-8">
              {/* <input className="form-control" type="text" value=""  style={{width:'500px'}}/> */}
              <button className="btn btn-default" style={{marginRight:"10px"}}>Oui</button>
              <button className="btn btn-default">Non</button>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label">Email:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" placeholder="email"  style={{width:'500px'}}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label">Time Zone:</label>
            <div className="col-lg-8">
              <div className="ui-select">
                <select id="user_time_zone" className="form-control"  style={{width:'500px', height:"40px"}}>
                  <option value="Hawaii">(GMT-10:00) Hawaii</option>
                  <option value="Alaska">(GMT-09:00) Alaska</option>
                  <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                  <option value="Arizona">(GMT-07:00) Arizona</option>
                  <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                  <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                  <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                  <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label">Choose your favorite movie genre:</label>
            <div className="col-lg-8">
              <div className="ui-select">
                <select id="user_time_zone" className="form-control"  style={{width:'500px', height:"40px"}}>
                  <option value="Horror">Horror</option>
                  <option value="Science-fi">Science-fi</option>
                  <option value="Aventure">Aventure</option>
                  <option value="Comédie">Comédie</option>
                  <option value="Fantastique">Fantastique</option>
                  <option value="Policier" selected="selected">Policier</option>
                  <option value="Romance">Romance</option>
                  <option value="Mystère">Mystère</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label">Choose your favorite serie genre:</label>
            <div className="col-lg-8">
              <div className="ui-select">
                <select id="user_time_zone" className="form-control"  style={{width:'500px', height:"40px"}}>
                  <option value="Horror">Horror</option>
                  <option value="Science-fi">Science-fi</option>
                  <option value="Aventure">Aventure</option>
                  <option value="Comédie">Comédie</option>
                  <option value="Fantastique">Fantastique</option>
                  <option value="Policier" selected="selected">Policier</option>
                  <option value="Romance">Romance</option>
                  <option value="Mystère">Mystère</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
  </div>
</div>
<hr/>
</div>

// source: https://richreact.com/react-examples/edit-profile-form#code-editor1
    );
}