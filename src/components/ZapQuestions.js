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
        },
        {
            question:"Podemos colocar ... dentro do JSX ",
            answer:"expressões"
           },
           {
            question:"O ReactDOM nos ajuda...",
            answer:"interagindo com a DOM para colocar componentes React na mesma"
           },
           {
            question:" Usamos o npm para ...",
            answer:"gerenciar os pacotes necessários e suas dependências"
           },
           {
            question:"Usamos props para ...",
            answer:"passar diferentes informações para componentes "
           },
           {
            question:"Usamos estado (state) para ...",
            answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
           }
    ]
    function comparador() {
        return Math.random() - 0.5;
    }
    
    deck.sort(comparador);
    const[resultList,setResultList]=React.useState([]);
    const[error,setError]=React.useState('');
   
    return(
    <>
     <div className="deck">
     {deck.map((card,index)=><Flashcard 
     question={card.question}
     answer={card.answer}
     index={index}
     key={index}
     setResultList={setResultList}
     resultList={resultList}
     setError={setError}
     />
     )}
     
     </div>
     <FootMenu setResultList={setResultList}
     resultList={resultList} 
     deck={deck}
     error={error}
     />
     </>
    )
}