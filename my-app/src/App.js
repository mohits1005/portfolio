import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

export default function Portfolio() {
  return (
    <Router>
      <div className="app-layout">
        <Link to="/">
          <div className="user-name">
            Mohit Sharma
          </div>
        </Link>
        <div className="custom-nav">
          <div className="options">
            <Link to="/blog">
              <div className="user-name">
                /blog
              </div>
            </Link>
          </div>
          <div className="options">
            <Link to="/projects">
              <div className="user-name">
                /projects
              </div>
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-content">
      <div className="para">
        Hi, I am Mohit. I build t  hings that help users have a better experience on web.
      </div>
      <div className="para">
        Currently working as a Senior Software Engineer at Impact Analytics where I help build smart AI SAAS products for US based retails clients such as PUMA, CK, Joann, DSG.
      </div>
      <div className="para">
        My past gig was at Focus Academy for Career Enhancement (FACE) where I worked on creating a learning/content creation platform for users across the world.
      </div>
      <div className="para">
        I enjoy watching football (CFC Pride of London) and anime in my free time. Check out my animelist.
      </div>
      <div className="para">
        You can find me on Github, and LinkedIn, or reach me via email. I promise I won’t bite. :)
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <h2>Blog Content</h2>
    </div>
  );
}

function Project() {
  return (
    <div>
      <h2>Project Content</h2>
    </div>
  );
}
