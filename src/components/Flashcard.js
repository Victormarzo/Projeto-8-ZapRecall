import round from "../components/img/round.svg"
import right from "../components/img/right.svg"
import wrong from "../components/img/wrong.svg"
import maybe from "../components/img/maybe.svg"
import play from "../components/img/play.svg"


import React from "react";
export default function Flashcard({question,answer,index,setResultList,resultList,setError}){
        const [turnCard,setTurnCard]=React.useState("true");
        const [turnQuestion,setTurnQuestion]=React.useState("true");
        const [turnAnswer,setTurnAnswer]=React.useState("true");
        const [style,setStyle]=React.useState("");
        
        return(
            
            <>{turnQuestion?(
                <div onClick={() => setTurnQuestion(!turnQuestion)} class="question">
                    <p>Pergunta {index+1}</p>
                    <img 
                    src={play}/>
                </div>
            ):(turnCard? (
                <div class="questionInside">
                    <div>
                        <p class="textQuestion">{question}</p>
                        <img onClick={() => setTurnCard(!turnCard)} src={round}/>
                    </div>
                </div>):(turnAnswer? (
                <div class='questionAnswers questionInside'>
                    <span class="textQuestion">{answer}</span>
                    <div class="options">   
                        <div 
                        onClick={() => {
                            
                            setTurnAnswer(!turnAnswer);
                            setStyle("redg");
                            setResultList([...resultList,<img src={wrong} />])
                            setError(1);
                            
                        }}
                        class="answer red">Não lembrei</div>
                        <div onClick={() => {
                            
                            setTurnAnswer(!turnAnswer);
                            setStyle("orangeg");
                            setResultList([...resultList,<img src={maybe} />])
                            
                           
                        }} 
                        class="answer orange">Quase não lembrei</div>
                        <div onClick={() => {
                        
                            setTurnAnswer(!turnAnswer);
                            setStyle("greeng");
                            setResultList([...resultList,<img src={right}/>])
                            
                        }} 
                        class="answer green">Zap!</div>
                    </div>
                </div>
                 ):(<div class="question">
                 <p class={style }>Pergunta {index+1}</p>
                 <img 
                 src={play}/>
             </div>)))

            }
            </>
        )

}