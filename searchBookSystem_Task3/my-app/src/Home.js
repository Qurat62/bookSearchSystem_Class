import React from 'react';
import './App.css';
import './styles.css';
// import Menu from './Menu.js';
// import Footer from './Footer.js';
// import Section from './Section.js';
 import FormSection from './FormSection.js';
// import LastSection from './LastSection.js';
import Heading from './Heading.js';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

function App() {
  return (

    <React.Fragment>

      <header className="App-header">
      <div>
            <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">VisionX</label>
        <ul>
            <li><Link className="active" to={"/Home"}>Home</Link></li>
            <li><Link className="" >About</Link></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>
           </nav>
   
            
        </div>
      </header>     
      {/* <Heading></Heading> */}
      {/* <Section></Section>
      <Section></Section> */}


      <FormSection></FormSection>
      {/* <LastSection></LastSection>
        <Footer></Footer>
       */}
         <div className="footer-section brown-border"><small>© 2020 VisionX, Inc. All rights reserved.</small></div>
        </React.Fragment>
  );
}

export default App;
