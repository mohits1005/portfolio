import React from "react";
import {
    Link
} from "react-router-dom";
export default function Blog() {
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