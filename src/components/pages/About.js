import React from "react";

function About() {
  return (
    <div id="content">
      <div id="intro">
        <section id="main-bio">
          <h2>About Me</h2>
          <p>Hi, I'm Kevin Doh, a web developer and digital designer. I recently graduated from UC Davis's design program and Trilogy Coding Bootcamp's web development course.</p>
          <p>This website is an online portfolio to showcase my past web development projects.</p>
          <p><a href="resume-2021.pdf" download>Resume</a></p>
        </section>
      
        <section id="contact-info">
          <h2>Contact Info</h2>
          <ul id="contact-links">
            <li><strong>Email:</strong> <a href="mailto: kdoh52@gmail.com">kdoh52@gmail.com</a></li>
            <li><strong>Github:</strong> <a href="https://github.com/kdoh52">github.com/kdoh52</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kdoh/">linkedin.com/in/kdoh/</a></li>
            <li><strong>Phone: </strong>(408) 960-5481</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
