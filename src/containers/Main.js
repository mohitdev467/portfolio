import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default function Main() {
  if (settings.isSplash) {
    return (
      <div>
        <BrowserRouter basename="/">
          <Switch>
            <Route path="/" exact render={() => <Splash />} />
            <Route path="/home" render={() => <Home />} />
            <Route path="/experience" exact render={() => <Experience />} />
            <Route path="/education" render={() => <Education />} />
            <Route path="/contact" render={() => <Contact />} />
            <Route path="/splash" render={() => <Splash />} />
            <Route path="/projects" render={() => <Projects />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div>
        <BrowserRouter basename="/">
          <Switch>
            <Route path="/" exact render={() => <Splash />} />
            <Route path="/home" render={() => <Home />} />
            <Route path="/experience" exact render={() => <Experience />} />
            <Route path="/education" render={() => <Education />} />
            <Route path="/contact" render={() => <Contact />} />
            <Route path="/projects" render={() => <Projects />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
