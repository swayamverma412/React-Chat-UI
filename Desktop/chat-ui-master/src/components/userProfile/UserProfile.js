import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile" >
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU" />
          </div >
          <h4>Fernando Faucho</h4>
          <p>CEO & Founder </p>
        </div>
        <div className="profile__card">
          <div className="card__header" >
            <h4>Home</h4>
        
          </div>
          <div className="card__header">
          <h4 style={{color:"#2A8BF2"}}>Chat</h4>
          </div>
        <div className="card__header">
          
        
          <h4 >Setting</h4>
        </div>
        </div>
      </div>
    );
  }
}
