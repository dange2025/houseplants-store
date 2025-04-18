import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Green Haven</h1>
        <p>We bring life to your home with beautiful indoor plants. Discover a world of green, right from your living room!</p>
        <Link to="/products">
          <button className="get-started">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
