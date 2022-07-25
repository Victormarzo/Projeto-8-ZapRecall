import React from "react"
export default function FootMenu({resultList,deck,error}){
   let result;
   
    function acabo (){
    if(resultList.length===deck.length){
        if(error===1){
            result=
            <>
            <p>
                😢 <strong>Putz...</strong>
            </p>
            <p>
                Ainda faltam alguns...<br/>Mas não desanime!
            </p>
            </>
        }else{
            result=
            <>
            <p>
                🥳 <strong>Parabéns!!!</strong>
            </p>
            <p>
                Você não esqueceu de nenhum flashcard!
            </p>
            </>
        }
        
    }
   }
   acabo();
    return(
    <div className="footMenu">
        {result}
        <p>{resultList.length}/{deck.length} CONCLUÍDOS</p>
        <div className="answers">
            {resultList}
        </div>
        
    </div>

   )

}