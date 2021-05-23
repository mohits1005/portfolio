import React from "react";
import {
    Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridItem:{}
})

export default function Nav() {
    const classes = useStyles();
    return (
        <>
        <Box
            component={Grid}
            className={classes.gridItem}
            item
            display={{ xs: "none", sm: "block" }}
            >
            <Link to="/" className="link-hover">
                <div className="user-name">
                    Mohit Sharma
                </div>
            </Link>
        </Box>
        <Box
            component={Grid}
            className={classes.gridItem}
            item
            display={{ xs: "block", sm: "none" }}
        >
            <Link to="/" className="link-hover-mobile">
                <div className="user-name">
                    Mohit Sharma
                </div>
            </Link>
        </Box>
        <br />
        <div className="custom-nav">
            <Grid
            container>
                <Box 
                    component={Grid}
                    className={classes.gridItem}
                    item
                    md = {2}
                    display = {{xs: "none", sm: "block"}}
                >
                    <div className="options">
                        <Link to="/blog" className="link-hover">
                            <div className="link-title">
                                    /blog
                            </div>
                        </Link>
                    </div>
                </Box>
                <Box
                    component={Grid}
                    className={classes.gridItem}
                    item
                    md={4}
                    display={{ xs: "none", sm: "block" }}
                >
                    <div className="options">
                        <Link to="/projects" className="link-hover">
                            <div className="link-title">
                                    /projects
                            </div>
                        </Link>
                    </div>
                </Box>
                <Box 
                    component={Grid}
                    className={classes.gridItem}
                    item
                    xs = {3}
                    display={{ xs: "block", sm: "none"}}
                >
                    <div className="options">
                        <Link to="/blog" className="link-hover-mobile">
                            <div className="link-title">
                                    blog
                            </div>
                        </Link>
                    </div>
                </Box>
                <Box
                    component={Grid}
                    className={classes.gridItem}
                    item
                    xs={3}
                    display={{ xs: "block", sm: "none" }}
                >
                    <div className="options">
                        <Link to="/projects" className="link-hover-mobile">
                            <div className="link-title">
                                    projects
                            </div>
                        </Link>
                    </div>
                </Box>
            </Grid>
        </div><br />
        </>
    )
}