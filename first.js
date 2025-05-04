let userScore = 0;
let compScore = 0;


const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice = () =>{
 const options=["rock","paper","scissor"];
 const randIdx=Math.floor(Math.random()*3);
 //for random call
 //math.random=return decimal values
 //math.floor(math.random)= returns integers
 return options[randIdx];

}
const drwaGame = () =>{

    msg.innerText = "Game was draw.please try again";
    msg.style.backgroundColor="blue";
}
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`you lost. ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) =>{
    /*console.log("user choice= ",userChoice);*/
     //generate userchioce
     const compChoice=genCompChoice();
     /*console.log("comp choice= ",compChoice);*/
     
     
     if(userChoice===compChoice)//draw game
     {
        drwaGame();
     }
     else 
     {
        let userWin = true;
     if(userChoice==="rock")//paper,scissor
        {
            userWin = compChoice === "paper" ? false : true;
        } 
        else if(userChoice==="paper"){
            userWin = compChoice === "scissor"  ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true

        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
       
});
});