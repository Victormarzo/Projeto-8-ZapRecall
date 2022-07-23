import React from "react";

export default function StarterMenu({screen,setScreen}){
    return(
        <div class="starterMenu">
            <img src="./assets/img/logo.svg"/>
            <p class="logo">ZapRecall</p>
            <div onClick={() => setScreen(!screen)}
            class="startButton">Iniciar Recall!</div>
        </div>
    )
}