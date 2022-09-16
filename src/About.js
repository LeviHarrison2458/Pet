import Navbar from "./Components/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link,Outlet } from "react-router-dom";

const About = () => {
    return(
        <><Navbar /><section className="section">
            <Outlet />
        </section><h2>Nothing Here</h2></>
    )

}
export default About