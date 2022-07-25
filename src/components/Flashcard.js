import React from "react";
export default function Flashcard({question,answer,index,setResultList,resultList}){
        const [turnCard,setTurnCard]=React.useState("true");
        const [turnQuestion,setTurnQuestion]=React.useState("true");
        const [turnAnswer,setTurnAnswer]=React.useState("true");
        const [style,setStyle]=React.useState("");
        return(
            
            <>{turnQuestion?(
                <div class="question">
                    <p>Pergunta {index+1}</p>
                    <img onClick={() => setTurnQuestion(!turnQuestion)} 
                    src="./assets/img/play.svg"/>
                </div>
            ):(turnCard? (
                <div class="questionInside">
                    <div>
                        <p class="textQuestion">{question}</p>
                        <img onClick={() => setTurnCard(!turnCard)} src="./assets/img/round.svg"/>
                    </div>
                </div>):(turnAnswer? (
                <div class='questionAnswers questionInside'>
                    <span class="textQuestion">{answer}</span>
                    <div class="options">   
                        <div 
                        onClick={() => {
                            
                            setTurnAnswer(!turnAnswer);
                            setStyle("redg");
                            setResultList([...resultList,<img src="./assets/img/wrong.svg" />])
                            
                        }}
                        class="answer red">Não lembrei</div>
                        <div onClick={() => {
                            
                            setTurnAnswer(!turnAnswer);
                            setStyle("orangeg");
                            setResultList([...resultList,<img src="./assets/img/question.svg" />])
                            
                           
                        }} 
                        class="answer orange">Quase não lembrei</div>
                        <div onClick={() => {
                        
                            setTurnAnswer(!turnAnswer);
                            setStyle("greeng");
                            setResultList([...resultList,<img src="./assets/img/right.svg" />])
                            
                        }} 
                        class="answer green">Zap!</div>
                    </div>
                </div>
                 ):(<div class="question">
                 <p class={style }>Pergunta {index+1}</p>
                 <img 
                 src="./assets/img/play.svg"/>
             </div>)))

            }
            </>
        )

}