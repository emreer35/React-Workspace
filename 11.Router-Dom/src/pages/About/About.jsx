import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      About
      <Link to={"employee"}>Employee</Link>
      <Link to={"company"}>Company</Link>
      <Outlet />
    </div>
  );
};

export default About;
