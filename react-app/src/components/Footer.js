import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <NavLink to="https://github.com/julia-richards/melodie" activeClassName="active">
                melodie GitHub repo
            </NavLink>
            <NavLink to="https://github.com/julia-richards" activeClassName="active">
                Julia's GitHub
            </NavLink>
            <NavLink to="https://github.com/sal-wav" activeClassName="active">
                Salina's GitHub
            </NavLink>
            <NavLink to="https://github.com/monajain99" activeClassName="active">
                Rashmi's GitHub
            </NavLink>
            <NavLink to="https://github.com/hassanmt96" activeClassName="active">
                Hassan's GitHub
            </NavLink>
        </div>
    );
}

export default Footer;
