import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Grid from '@material-ui/core/Grid';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Blog from './components/Blog.js';
import Project from './components/Project.js';

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
            <Nav />
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
