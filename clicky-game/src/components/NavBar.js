import React from "react"
const navBarStyles = {
    backgroundColor: "purple",
    color: "white"
}

//Think a header, but it's a navbar that does no navigating. So yeah it's a header. Sort of a "title card" 
const NavBar = (props) => (
    <ul className="navbar nav" style={navBarStyles}>
        <li>Clicky Game!</li>
        <li>Current Score: {props.score}</li>
        <li>High Score: {props.hiScore}</li>
    </ul>
)

export default NavBar;