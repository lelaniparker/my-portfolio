import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <>
    <h1>This is the About Page</h1>
    <p>Coder Academy's projects which were completed during your bootcamp</p>
    <Link to={`/ca-projects-list`}>CA Projects List page</Link>

    <p>Personal projects I have completed</p>
    <Link to={`/personal-projects-list`}>Personal Projects List page</Link>
  </>
);

export default AboutPage;
