import React from 'react';
import { NavLink } from 'react-router-dom';

const Landing = () => {

    return (
        <div className="wholePageContainer">
            <div id="landingBody" className="bodyContainer">
                <h1 id="landingHead">We're here to listen.</h1>
                <div className="landingBtnContainer">
                    <NavLink to="/login" id="linkBtn" className="links" >Start Listening</NavLink>
                    <a href="https://github.com/julia-richards/melodie" id="linkBtn" className="links" activeClassName="active">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Landing;
