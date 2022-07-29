import React from 'react';
import profilePic from '../assets/profilePic.jpg'

//About Me
export default function AboutMe() {

  return (
    <section className="container-1">
        <aside className="profile" id="profile-id">
            <img src= {profilePic} alt="profile-pic" className="profPic"/> <br/><br/>
            <h2>Edward</h2> <br/>

        </aside>
        <section className="bio" id="bio-id">
            <h2>About Me</h2><br/>
            <p>My name is Edward.I am a professional web developer with extensive knowledge of HTML and CSS. I am currently attending a Coding Bootcamp offered by the University of Toronto, specializing in web development. I am looking for a Web Developer position that works with HTML, CSS, and JavaScript.</p> <br/>
        </section>
    </section>
  );
}
