import React from "react";
import logo from "../components/img/logo.svg"
export default function StarterMenu({screen,setScreen}){
    return(
        <div className="starterMenu">
            <img src={logo}/>
            <p className="logo">ZapRecall</p>
            <div onClick={() => setScreen(!screen)}
            className="startButton">Iniciar Recall!</div>
        </div>
    )
}