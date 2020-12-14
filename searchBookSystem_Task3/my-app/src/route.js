
import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
import App from "./App.js";
import Detail from "./Detail.js";
import Menu from './Menu.js';
import Footer from './footer.js';
import Section from './Section.js';
import FormSection from './FormSection.js';
import LastSection from './LastSection.js';
import Heading from './Heading.js';
import history from './history';
import SearchArea from "./SearchArea.js";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/App" exact component={App} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/formSection" component={FormSection} />
                    <Route path="/searchArea" component={SearchArea}/>
                    <Route path="/heading" component={Heading}/>
               
                </Switch>
            </Router>
        )
    }
}

