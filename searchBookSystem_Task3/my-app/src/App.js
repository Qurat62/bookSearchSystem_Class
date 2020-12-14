import React  from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import BookDetails from './BookDetails.js';

import { propTypes } from 'react-bootstrap/esm/Image';


function App() {
  return (

    <div className="wrapper">
<Router>
    <Switch>
        {
        /* <Route exact path="/" exact component={App} /> */}
        
        <Route path="/Home" component={Home}/>
        
        <Route path="/BookDetails" component={BookDetails}/>
        
     
    
   
    </Switch>
</Router>
    </div>
  
  );
}

export default App;
