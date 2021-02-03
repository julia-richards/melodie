import React from 'react';
import { NavLink } from 'react-router-dom';

const Landing = () => {

    return (
        <div className="wholePageContainer">
            <div className="bodyContainer">
                <h1 id="landingHead">We're here to listen.</h1>
                <div>
                    <NavLink to="/login" className="links" activeClassName="active">Start Listening</NavLink>
                    <a href="https://github.com/julia-richards/melodie" className="links" activeClassName="active">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Landing;
