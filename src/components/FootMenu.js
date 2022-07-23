import React from "react"
export default function FootMenu({resultList}){
   return(
    <div class="footMenu">
        <span>1/4 CONCLUÍDOS</span>
        <div class="answers">
            {resultList}
        </div>
        
    </div>

   )

}