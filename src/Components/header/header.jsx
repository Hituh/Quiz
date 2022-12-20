import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
                <div className="header">
                    <Link className="link" to="/" style={{ textDecoration: "none", marginLeft: "1rem" }}>QuizDB</Link>
                    <Link className="link" to="quizList" style={{ textDecoration: "none", marginLeft: "1rem" }}>Lista quizów</Link>
                    <Link className="link" to="/" style={{ textDecoration: "none" }}>Contact</Link>
                </div>
        </div>
    )
}
export default Header