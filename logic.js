let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const countUserScore = document.querySelector("#user-score");
const countCompScore = document.querySelector("#comp-score");




const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); // gen ramdon number 0 1 2
    return options[randIdx];

};

const showWinner = (userWin, userChoice ,compChoice) =>{
  if(userWin){
    userScore++;
    countUserScore.innerText = userScore;
    msg.innerText =  `congratulations You Win Your ${userChoice} beats computer ${compChoice}` ;
    msg.style.backgroundColor = "#008000";
    
      }
  else{
    compScore++;
    countCompScore.innerText = compScore;
    msg.innerText =  `Computer Win computer ${compChoice} beats your ${userChoice}` ;
    msg.style.backgroundColor = "#FF0000";
  }
};


const draw = () =>{
    msg.innerText =  "Game Draw and Play Again";
    msg.style.backgroundColor = "#081b31";
   
};

const playgame = (userChoice) => {
     const compChoice = getCompChoice(); // gen computer 
   if(userChoice === compChoice){
        draw();

    } 
    else{
        let userWin = true;
        if(userChoice === rock){
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === paper){
            userWin = compChoice === "scissors" ? false : true;

        }
        else{
            userWin = compChoice === "rock"? false : true;
        }

    showWinner(userWin, userChoice , compChoice);
    }
};


choices.forEach((choice)=>{
choice.addEventListener("click", () => {
const userChoice = choice.getAttribute("id");
playgame(userChoice);


});
});