import React from "react";
import image1 from "../assets/2.jpg";
import image2 from "../assets/3.jpg"
import image3 from "../assets/bg.jpg"

import "./index.css";

function Project() {
  return (
    <section id="03" className="home hero">
          <img src={image3} id="bg" />
            <br /><br />
            <div className="columns ml-6 pl-6">
              <div className="column is-half">
                <a href="google.lk"><img src={image1} id="pto"  /><br /></a>
                <p className="para9">Projects</p>
              </div>
              <div className="column ml-6 mr-6">
                <a href><img src={image2} id="pto" className="mr-6 pl-8" /><br /></a>
                <p className="para10">Webpage</p>
              </div>
            </div>
          
        </section>
    
  );
}

export default Project;
