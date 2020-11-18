import React from "react";

function About() {
  return (
    <div id="content">
      <div id="intro">
        <section id="main-bio">
          <h2>About Me</h2>
          <img class="project-pic" src="./images/profile-pic.jpg" alt="profile-pic" />
          <p>Hi, I'm Kevin Doh, a web developer and digital designer. I recently graduated from UC Davis's design program and Trilogy Coding Bootcamp's web development course.</p>
          <p>This website is an online portfolio to showcase my past web development projects.</p>
          <p><a href="resume-2021.pdf" download>Resume</a></p>
        </section>
      </div>
    </div>
  );
}

export default About;
