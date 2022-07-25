import Flashcard from "./Flashcard";
import FootMenu from "./FootMenu"
import React from "react"
export default function ZapQuestions(){

    const deck=[
        {
         question:"O que é JSX?",
         answer:"Uma extensão de linguagem do JavaScript"
        },
        {
         question:"O React é...",
         answer:"uma biblioteca JavaScript para construção de interfaces"
        },
        {
         question:"Componentes devem iniciar com...",
         answer:"letra maiúscula"
        }
    ]
    function comparador() {
        return Math.random() - 0.5;
    }
    
    deck.sort(comparador);
    const[resultList,setResultList]=React.useState([])
   
    return(
    <>
     <div class="deck">
     {deck.map((card,index)=><Flashcard 
     question={card.question}
     answer={card.answer}
     index={index}
     setResultList={setResultList}
     resultList={resultList}
     />
     )}
     
     </div>
     <FootMenu setResultList={setResultList}
     resultList={resultList} 
     deck={deck}
     
     />
     </>
    )
}