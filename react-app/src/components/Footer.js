import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <NavLink className="links" to="https://github.com/julia-richards/melodie" activeClassName="active">
                melodie GitHub repo
            </NavLink>
            <NavLink className="links" to="https://github.com/julia-richards" activeClassName="active">
                Julia's GitHub
            </NavLink>
            <NavLink className="links" to="https://github.com/sal-wav" activeClassName="active">
                Salina's GitHub
            </NavLink>
            <NavLink className="links" to="https://github.com/monajain99" activeClassName="active">
                Rashmi's GitHub
            </NavLink>
        </div>
    );
}


export default Footer;
