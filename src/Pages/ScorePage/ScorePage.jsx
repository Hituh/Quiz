import React from "react"
import { useParams } from 'react-router-dom'
import './ScorePage.css'

const Score = () => {
    const { score } = useParams();
    return (
        <div className="example-container11">
            <div className="container11" >
                <div  style={{color:"black",display: "flex", justifyContent: "center",alignItems: "center", fontSize:"50px"}}>
                    Twój wynik
                </div>
                <div  style={{color:"gold",display: "flex", justifyContent: "center",alignItems: "center", fontSize:"50px"}}>
                    {score}
                </div>
            </div>
        </div>
    )
}
export default Score