import React from "react"
export default function ZapQuestions({setResultList,resultList}){

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

    function answerRegister(answerStatus){
        setResultList([...resultList,answerStatus]);
        

    }

    function Flashcard({question,answer,index}){
        const [turnCard,setTurnCard]=React.useState("true");
        const [turnQuestion,setTurnQuestion]=React.useState("true");
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
                </div>):(
                <div class='questionAnswers questionInside'>
                    <span class="textQuestion">{answer}</span>
                    <div class="options">   
                        <div 
                        onClick={() => {
                            answerRegister(<img src="./assets/img/wrong.svg" />)
                            setTurnQuestion(!turnQuestion)
                            console.log(resultList)
                        }}
                        class="answer red">Não lembrei</div>
                        <div onClick={() => {
                            answerRegister(<img src="./assets/img/question.svg" />)
                            setTurnQuestion(!turnQuestion)
                            console.log(resultList)
                        }} 
                        class="answer orange">Quase não lembrei</div>
                        <div onClick={() => {
                            answerRegister(<img src="./assets/img/right.svg" />)
                            setTurnQuestion(!turnQuestion)
                            console.log(resultList)
                        }} 
                        class="answer green">Zap!</div>
                    </div>
                </div>
                 ))

            }
            </>
        )
    }
    return(
    
     <div class="deck">
     {deck.map((card,index)=><Flashcard 
     question={card.question}
     answer={card.answer}
     index={index}
     />
     )}
     </div>
    )
}