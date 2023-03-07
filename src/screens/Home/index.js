import React from "react";
import image1 from "../assets/bg.jpg"

import "./index.css";

function Home() {
    return (

      <section id="01" className="home hero">
        
         
            <nav className="navbar nav_color" role="navigation" aria-label="main navigation" style={{paddingRight: '1cm', fontWeight: 'bold'}}>
              <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </a>
              </div>
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                  <div className="buttons" style={{border: '1cm'}}>
                    <a className="button is-dark" href="#01" color="blue">
                      Home
                    </a>
                    <a className="button is-dark" href="#02">
                      About
                    </a>
                    <a className="button is-dark" href="#03">
                      Projects
                    </a>
                    <a className="button is-dark" href="#04">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </nav><img src={image1} id="bg" />
            
            <div className="columns">
              <div className="column is-three-quarters">
                <span className="para1">Hello,I'm </span>
                <span className="para2">Dilanga Niroshan</span>
                <span className="para3">I am a creative and talented programer and web developer.<br />
                  You can do what you want from me.</span>
              </div>
            </div>
            <div id="ticons">
              <span className="icon mt-6 mb-4" style={{color: 'rgb(0, 0, 0)', fontSize: '80px'}}>
                <a href="facebook.com"><i className="fa-brands fa-facebook" /></a>
              </span><br />
              <span className="icon mt-6 mb-4" style={{color: 'rgb(0, 0, 0)', fontSize: '80px'}}>
                <a href="whatsapp.com"><i className="fa-brands fa-whatsapp" /></a>
              </span><br />
              <span className="icon mt-6 mb-4" style={{color: 'rgb(0, 0, 0)', fontSize: '80px'}}>
                <a href="github.com"><i className="fa-brands fa-github" /></a>
              </span><br />
              <span className="icon mt-6 mb-4" style={{color: 'rgb(0, 0, 0)', fontSize: '80px'}}>
                <a href="linkedin.com"><i className="fa-brands fa-linkedin" /></a>
              </span>
            </div>
          </section>
    );
        
    }
    
    export default Home;