import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <Link className="link" to="/" style={{ textDecoration: "none", marginLeft: "1rem" }}>QuizDB</Link>
            <Link className="link" to="/quizPageReact" style={{ textDecoration: "none", marginLeft: "1rem" }}>Quiz React</Link>
            <Link className="link" to="/quizPageAngular" style={{ textDecoration: "none", marginLeft: "1rem" }}>Quiz Angular</Link>
            <Link className="link" to="/" style={{ textDecoration: "none",marginRight: "1rem"  }}>Contact</Link>
        </div>
    )
}
export default Header