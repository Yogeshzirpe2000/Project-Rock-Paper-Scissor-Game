let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            //paper,scissors
           userwin= compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userwin=compChoice==="rock" ? true:false;
        }
        else{
            //rock,paper
            userwin=compChoice==="rock" ? false:true;
        }
        showWinner(userwin,userChoice,compChoice);

    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        const choiceid=choice.getAttribute("id");
        playGame(userChoice);
        
    })
})

const showWinner=(userwin,userChoice,compChoice) =>{
    if(userwin===true){
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;     
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText =userScore;
    }
    else{
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText =compScore;

    }
}
const drawGame= () =>{
console.log("game was drow");
msg.innerText ="Game was Draw. Play Again."
}
