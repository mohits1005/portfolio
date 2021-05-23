import React from "react";
import {
    Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
export default function Nav() {
    return (
        <>
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
        </>
    )
}