import StarterMenu from "./StarterMenu";
import ZapRecall from "./ZapRecall";
import React from "react";
import "../components/css/reset.css"
import "../components/css/style.css"
export default function App(){
    const [screen,setScreen] = React.useState(true);
    return(
        <>
            {screen ? (
                <StarterMenu screen={screen} setScreen={setScreen}/>
            ) : (
            <ZapRecall />
            )}
        </>
    );
}