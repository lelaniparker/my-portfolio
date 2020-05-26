import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";
import CAProjectsListPage from "./pages/CAProjectsListPage";
import CAProjectPage from "./pages/CAProjectPage";
import PersonalProjectsListPage from "./pages/PersonalProjectsListPage";
import PersonalProjectPage from "./pages/PersonalProjectPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/ca-projects-list" component={CAProjectsListPage} />
            <Route path="/ca-projects/:name" component={CAProjectPage} />
            <Route path="/personal-projects-list" component={PersonalProjectsListPage} />
            <Route path="/personal-projects/:name" component={PersonalProjectPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
