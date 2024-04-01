import React from "react";
import img from "../img/profil.png";
import img2 from "../img/profilfemme.jpg";
import { NavLink } from "react-router-dom";


export default function About() {

    return(
      <div className="about-body">
        <NavLink to="/home"><i className="fa-solid fa-arrow-left" id="arrow-btn"
            style={{fontSize:"30px"}}></i></NavLink>
        <h3 className="aboutus">About us</h3>
        <br></br>
        <section className="about-info">
          <h1 className="title-about">Our website</h1>
          <p className="para-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
        </section>
          <section className="about-container">
            <br/>
            <div class="row">
            <div className="profil">
              <img src={img} alt="profile" className="about-image"/>
              <div className="info-container">
              <h1>Lorsen</h1>
              <p class="title">Computer Science Student</p>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.</p>
              <br/>
              <p>lorsen@exemple.com</p>
              <a href="#contact"><button type="button" id="about-btn">Contact me</button></a>
              </div>
            </div>
            </div>
            <div className="row">
            <div className="profil">
              <img src={img2} alt="profile" className="about-image" style={{width:"300px", height:"160px"}}/>
              <div className="info-container">
              <h1>Rachel</h1>
              <p class="title">Computer Science Student</p>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.</p>
              <br/>
              <p>rachel@exemple.com</p>
              <a href="#contact"><button type="button" id="about-btn">Contact me</button></a>
              </div>
            </div>
            </div>
            <div className="row">
            <div className="profil">
              <img src={img} alt="profile" className="about-image"/>
              <div className="info-container">
              <h1>Tri</h1>
              <p class="title">Computer Science Student</p>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.</p>
              <br/>
              <p>tri@exemple.com</p>
              <a href="#contact"><button type="button" id="about-btn">Contact me</button></a>
              </div>
            </div>
            </div>
          </section>
          <br/>
      
<br/>

</div>
    )
}