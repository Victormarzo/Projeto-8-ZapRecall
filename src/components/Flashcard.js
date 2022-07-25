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
                <div onClick={() => setTurnQuestion(!turnQuestion)} className="question">
                    <p>Pergunta {index+1}</p>
                    <img 
                    src={play}/>
                </div>
            ):(turnCard? (
                <div className="questionInside">
                    <div>
                        <p className="textQuestion">{question}</p>
                        <img onClick={() => setTurnCard(!turnCard)} src={round}/>
                    </div>
                </div>):(turnAnswer? (
                <div className='questionAnswers questionInside'>
                    <span className="textQuestion">{answer}</span>
                    <div className="options">   
                        <div 
                        onClick={() => {
                            
                            setTurnAnswer(!turnAnswer);
                            setStyle("redg");
                            setResultList([...resultList,<img src={wrong} />])
                            setError(1);
                            
                        }}
                        className="answer red">Não lembrei</div>
                        <div onClick={() => {
                            
                            setTurnAnswer(!turnAnswer);
                            setStyle("orangeg");
                            setResultList([...resultList,<img src={maybe} />])
                            
                           
                        }} 
                        className="answer orange">Quase não lembrei</div>
                        <div onClick={() => {
                        
                            setTurnAnswer(!turnAnswer);
                            setStyle("greeng");
                            setResultList([...resultList,<img src={right}/>])
                            
                        }} 
                        className="answer green">Zap!</div>
                    </div>
                </div>
                 ):(<div className="question">
                 <p className={style }>Pergunta {index+1}</p>
                 <img 
                 src={play}/>
             </div>)))

            }
            </>
        )

}