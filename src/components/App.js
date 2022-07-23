import StarterMenu from "./StarterMenu";
import ZapRecall from "./ZapRecall";
import React from "react";

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