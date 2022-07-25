import React from "react"
export default function FootMenu({resultList,deck,}){
   
    return(
    <div class="footMenu">
        
        <span>{resultList.length}/{deck.length} CONCLUÍDOS</span>
        <div class="answers">
            {resultList}
        </div>
        
    </div>

   )

}