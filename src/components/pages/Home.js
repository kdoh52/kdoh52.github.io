import React from "react";

function Home() {
  return (
    <div id="content">
      <section id="projects">
        <h2>Projects</h2>
        <div id="kuma">
          <h3>Kuma</h3>
          <img class="project-pic" src="./images/kuma.png" alt="Kuma screenshot" />
          <ul>
            <li>App: <a href="https://secure-ravine-47166.herokuapp.com/" target="_blank">https://secure-ravine-47166.herokuapp.com/</a></li>
            <li>Repository: <a href="https://github.com/kdoh52/Kuma" target="_blank"> https://github.com/kdoh52/Kuma</a></li>
          </ul>
        </div>
        <div id="eat-da-burger">
          <h3>Eat-Da-Burger!</h3>
          <img class="project-pic" src="./images/eatdaburger.png" alt="Eat-Da-Burger screenshot"/>
          <ul>
            <li>App: <a href="https://stormy-temple-07121.herokuapp.com/" target="_blank">https://stormy-temple-07121.herokuapp.com/</a></li>
            <li>Repository: <a href="https://github.com/kdoh52/hw-13" target="_blank">https://github.com/kdoh52/hw-13</a></li>
          </ul>
        </div>
        <div id="journeyon">
          <h3>JourneyOn</h3>
          <img class="project-pic" src="./images/journeyon.png" alt="JourneyOn screenshot" />
          <ul>
            <li>App: <a href="https://kdoh52.github.io/project-1/" target="_blank">https://kdoh52.github.io/project-1/</a></li>
            <li>Repository: <a href="https://github.com/kdoh52/project-1" target="_blank">https://github.com/kdoh52/project-1</a></li>
          </ul>
        </div>
        <div id="weather">
          <h3>Weather App</h3>
          <img class="project-pic" src="./images/weather.png" alt="JourneyOn screenshot" />
          <ul>
            <li>App: <a href="https://kdoh52.github.io/hw-6/" target="_blank">https://kdoh52.github.io/hw-6/</a></li>
            <li>Repository: <a href="https://github.com/kdoh52/hw-6" target="_blank">https://github.com/kdoh52/hw-6</a></li>
          </ul>
        </div>
        <div id="planner">
          <h3>Day Planner</h3>
          <img class="project-pic" src="./images/planner.png" alt="JourneyOn screenshot" />
          <ul>
            <li>App: <a href="https://kdoh52.github.io/hw-5/" target="_blank">https://kdoh52.github.io/hw-5/</a></li>
            <li>Repository: <a href="https://github.com/kdoh52/hw-5" target="_blank">https://github.com/kdoh52/hw-5</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
