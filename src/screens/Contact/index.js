import React from "react";
import image1 from "../assets/bg.jpg"



import "./index.css";

function Contact() {
    return (
      
      
      <section id="04" className="home hero" style={{backgroundColor: 'black'}}>
      <img src={image1} id="bg"/>
      
      <div className="para7">
        For You
      </div>
      <div className="para8">How can we help you</div>
      
      <div className="position">
        <div className="field">
          <label className="label" id="fldName">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div className="field">
          <label className="label" id="fldName">Contact Number</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Text input" defaultValue />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label" id="fldName">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" defaultValue="hello@" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span>
          </div>
          <p className="has-text-danger-dark">This email is invalid</p>
        </div>
        <div className="field">
          <label className="label" id="fldName">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" defaultValue={""} />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </section>
  

    );
}

export default Contact;