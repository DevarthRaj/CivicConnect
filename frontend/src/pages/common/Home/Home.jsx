import React from "react";
import "./Home.css";

const Home = () => (
  <div className="home-container">
    <header className="home-hero">
      <h1>CivicConnect</h1>
      <p className="home-tagline">
        Report issues, track progress, build better communities.
      </p>
      <a href="/login" className="home-cta">Login</a>
      <a href="/register" className="home-cta secondary">Register as Citizen</a>
    </header>
    <section className="home-features">
      <h2>Features</h2>
      <ul>
        <li>File complaints about civic issues</li>
        <li>Transparent tracking and updates</li>
        <li>Role-based access for citizens, officers, and admins</li>
        <li>Feedback and resolution monitoring</li>
      </ul>
    </section>
  </div>
);

export default Home;