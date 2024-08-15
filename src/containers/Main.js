import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default function Main() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Switch>
          {/* Redirect from root URL to the appropriate page */}
          <Route exact path="/">
            {settings.isSplash ? <Redirect to="/portfolio" /> : <Redirect to="/home" />}
          </Route>

          {/* Define other routes */}
          <Route path="/portfolio" exact render={() => <Splash />} />
          <Route path="/home" render={() => <Home />} />
          <Route path="/experience" exact render={() => <Experience />} />
          <Route path="/education" render={() => <Education />} />
          <Route path="/contact" render={() => <Contact />} />
          <Route path="/splash" render={() => <Splash />} />
          <Route path="/projects" render={() => <Projects />} />

          <Route path="*">
            {settings.isSplash ? <Redirect to="/portfolio" /> : <Redirect to="/home" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
