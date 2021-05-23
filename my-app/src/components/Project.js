import React from "react";
import {
    Link
} from "react-router-dom";
export default function Project() {
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