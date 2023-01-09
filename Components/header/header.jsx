import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
                <div className="header">
                    <Link className="link" to="/" style={{ textDecoration: "none", marginLeft: "1rem" }}>QuizDB</Link>
                    <Link className="link" to="/quizPage" style={{ textDecoration: "none", marginLeft: "1rem" }}>Quiz React</Link>
                    <Link className="link" to="/quizPageA" style={{ textDecoration: "none", marginLeft: "1rem" }}>Quiz Angular</Link>
                    <Link className="link" to="/" style={{ textDecoration: "none" }}>Contact</Link>
                </div>
        </div>
    )
}
export default Header