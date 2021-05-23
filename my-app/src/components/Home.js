import React from "react";
import {
    Link
} from "react-router-dom";
export default function Home() {
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
                I enjoy watching football (CFC Pride of London), anime and playing games in my free time. Check out my <Link to="/"><span className="para-link">watchList</span></Link>.
      </div><br />
            <div className="para">
                You can find me on <Link to="/"><span className="para-link">Github</span></Link>, and <Link to="/"><span className="para-link">LinkedIn</span></Link>, or reach me via <Link to="/"><span className="para-link">email</span></Link>. Let's turn the world upside down. :P
      </div>
        </div>
    );
}
