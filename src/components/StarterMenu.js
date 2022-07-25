import React from "react";
import logo from "../components/img/logo.svg"
export default function StarterMenu({screen,setScreen}){
    return(
        <div class="starterMenu">
            <img src={logo}/>
            <p class="logo">ZapRecall</p>
            <div onClick={() => setScreen(!screen)}
            class="startButton">Iniciar Recall!</div>
        </div>
    )
}