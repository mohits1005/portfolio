import React from "react";
import {
    Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
export default function Nav() {
    return (
        <>
        <Link to="/" className="link-hover">
            <div className="user-name">
            Mohit Sharma
            </div>
        </Link><br />
        <div className="custom-nav">
            <Grid
            container>
                <Grid item md={2} xs={12}>
                    <div className="options">
                        <Link to="/blog" className="link-hover">
                            <div className="link-title">
                                    /blog
                            </div>
                        </Link>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className="options">
                        <Link to="/projects" className="link-hover">
                            <div className="link-title">
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