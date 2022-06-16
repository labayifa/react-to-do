import React from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";

import SinglePage from "./SinglePage"

const About = (props) => {
    console.log(useLocation());
    const { url, path } = useLocation()

    return (
        <div className="about__content">
            <ul className="about__list">
                <li>
                    <Link to={`${url}/about-app`}>About App</Link>
                </li>
                <li>
                    <Link to={`${url}/about-author`}>About Author</Link>
                </li>
            </ul>
            <Routes>
                <Route path={`${path}/:slug`} element={<SinglePage/>} />
            </Routes>
    </div>)
}
export default About