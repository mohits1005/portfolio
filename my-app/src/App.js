import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Grid from '@material-ui/core/Grid';
export default function Portfolio() {
  return (
    <Router>
      <div className="app-layout">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: '100vh', padding: '2rem'}}
        >

          <Grid item md={5} xs={12}>
            <Link to="/">
              <div className="user-name link-hover">
                Mohit Sharma
              </div>
            </Link><br />
            <div className="custom-nav">
              <Grid
                container>
                <Grid item md={2} xs={12}>
                  <div className="options">
                    <Link to="/blog">
                      <div className="link-title link-hover">
                        /blog
                      </div>
                    </Link>
                  </div>
                </Grid>
                <Grid item md={4} xs={12}>
                  <div className="options">
                    <Link to="/projects">
                      <div className="link-title link-hover">
                        /projects
                      </div>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </div><br />
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
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-content">
      <div className="para">
        Hi, I am Mohit. I build things that help users have a better experience on web.
      </div><br />
      <div className="para">
        Currently working as a Senior Software Engineer at <Link to="/"><span className="para-link">Impact Analytics</span></Link> where I build retail based SAAS products.
      </div><br />
      <div className="para">
        My past gig was at <Link to="/"><span className="para-link">Chalkstreet (FACE)</span></Link> where I built an online learning platform.
      </div><br />
      <div className="para">
        I enjoy watching football (CFC Pride of London) and anime in my free time. Check out my watchList.
      </div><br />
      <div className="para">
        You can find me on <Link to="/"><span className="para-link">Github</span></Link>, and <Link to="/"><span className="para-link">LinkedIn</span></Link>, or reach me via <Link to="/"><span className="para-link">email</span></Link>. Let's turn the world upside down. :P
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="blog-content">
      <div className="para">
        <Link to="/">
          <span className="blog-title">
            Let's Talk About Cross-Origin Resource Sharing (CORS)
          </span>
        </Link>&nbsp;
        <span className="blog-posted">
          (May 22)
        </span>
      </div><br />
      <div className="para">
        <Link to="/">
          <span className="blog-title">
            Introducing Quotes App
          </span>
        </Link>&nbsp;
        <span className="blog-posted">
          (May 22)
        </span>
      </div><br />
      <div className="para">
        <Link to="/">
          <span className="blog-title">
            Revealing Contents on Scroll Using JavaScript's Intersection Observer API
          </span>
        </Link>&nbsp;
        <span className="blog-posted">
          (May 22)
        </span>
      </div><br />
      <div className="para">
        <Link to="/">
          <span className="blog-title">
            Virtualizing the CPU
          </span>
        </Link>&nbsp;
        <span className="blog-posted">
          (May 22)
        </span>
      </div><br />
    </div>
  );
}

function Project() {
  return (
    <div className="project-content">
      <div className="para">
        <Link to="/">
          <span className="project-title">
            RealTime Chat Application
          </span>
        </Link>&nbsp;:&nbsp;
        <span className="project-desc">
          Made with Socket IO node library for real time chat updates. (JS, Node, Mongo)
        </span>
      </div><br />
      <div className="para">
        <Link to="/">
          <span className="project-title">
            Trello Clone
          </span>
        </Link>&nbsp;:&nbsp;
        <span className="project-desc">
          Can create JIRA boards and manage tasks/subtasks. (React, Node, Mongo)
        </span>
      </div><br />
      <div className="para">
        <Link to="/">
          <span className="project-title">
            Secure content upload/access
          </span>
        </Link>&nbsp;:&nbsp;
        <span className="project-desc">
          Supports JWT and cloudfront URL creation to secure content access. (Node, Mongo, AWS)
        </span>
      </div><br />
      <div className="para">
        <Link to="/">
          <span className="project-title">
            Custom Blog App
          </span>
        </Link>&nbsp;:&nbsp;
        <span className="project-desc">
          Create and display posts for blog. Integrated with custom comments and replies system. (React)
        </span>
      </div><br />
    </div>
  );
}
