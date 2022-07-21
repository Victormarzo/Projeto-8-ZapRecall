export default function ZapQuestions(){
    return(
    <> 
    <div class="question">
        <p>Pergunta 1</p>
        <img class="status" src="./assets/img/play.svg"/>
    </div>
    <div class="questionInside">
        <div>
            <p class="textQuestion">O que é JSX </p>
            <img src="./assets/img/round.svg"/>
        </div>
        
    </div>
    <div class='answers questionInside'>
        <p class="textQuestion">JSX é uma sintaxe para escrever HTML dentro do JS</p>
        <div class="options">   
            <div class="answer red">Não lembrei</div>
            <div class="answer orange">Quase não lembrei</div>
            <div class="answer green">Zap!</div>
        </div>


    </div>
    </>
    )
}