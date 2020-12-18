import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import AboutHead from "./components/AboutHead";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactHead from "./components/ContactHead";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Jumbotron />
          <ProjectList />
          <Footer />
        </Route>
        <Route exact path="/about">
          <AboutHead/>
          <About />
          <Footer />
        </Route>
        <Route exact path="/contact">
          <ContactHead />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
