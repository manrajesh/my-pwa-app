import React from 'react';
import {NavLink} from 'react-router-dom';

const Link = {
    width: "100px",
    padding: "6px 12px",
    margin: "0 6px 6px",
    background: "green",
    textDecoration: "none",
    color: "white",
}

const Navbar: React.FC = () => {
    return (
        <div className="Navbar">
            <NavLink to="/" exact style={Link} activeStyle={{background: "darkgreen"}}>Home</NavLink>
            <NavLink to="/about" exact style={Link} activeStyle={{background: "darkgreen"}}>About</NavLink>
            <NavLink to="/crop" exact style={Link} activeStyle={{background: "darkgreen"}}>Crop</NavLink>
            <NavLink to="/buy" exact style={Link} activeStyle={{background: "darkgreen"}}>Buy</NavLink>
            <NavLink to="/contact" exact style={Link} activeStyle={{background: "darkgreen"}}>Contact</NavLink>
        </div>
    )
}

export default Navbar;