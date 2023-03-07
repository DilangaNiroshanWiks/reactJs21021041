
import React from "react";
import image1 from "../assets/bg.jpg";



import "./index.css";

function Education() {
return (
  <section id="02" className="home hero">

          <img src={image1} id="bg"/>
            <div className="para5">About Me</div>
            <class className="para6"> I am a creative and talented computer science graduate seeking challenging problems and interested in new technology and tools. Also have a good ability of team playing and like programming and web development.
              <br /><br /><p id="Lname">Languages<br /></p>
              <p id="Lname2"> C | C# | C++ | Java |Python | PHP | CSS | HTML | JavaScript </p>
              <br /><p id="Lname"> Tools and Techniques<br /></p>
              <p id="Lname2">MYSQL | Rest API | Angular | React JS | Bootstrap | Git Lab | Laravel </p>
            </class>
          
        </section>
);
}

export default Education;
