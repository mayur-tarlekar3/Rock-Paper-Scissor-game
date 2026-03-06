// 1. track user and comp score
let userScore =0;
let compScore =0;

// 2.find out which choice is selected
const choices=document.querySelectorAll(".choice");

// 8.acces msg to show result
 const msg=document.querySelector("#msg");

 // 9. acces usser score para
 const userScorePara=document.querySelector("#myscore");
  const compScorePara=document.querySelector("#alienscore");

//5. genrating computer choice
const genCompChoice=()=>{
  const options =["rock","paper","scissor"];
  const randIdx=Math.floor(Math.random()*3); // grnare 0to 1 number
  return options[randIdx]; // that num is use as idx to acces choices
}

// 6. draw
  const drawGame=()=>{
   
       msg.innerText="Draw!!!";
        msg.style.backgroundColor="blue"
  }


  // 7. show winner
  const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
     userScore++;
     userScorePara.innerText=userScore;
      msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";
    }else{
      compScore++;
     compScorePara.innerText=compScore;
            msg.innerText=`You lose!   ${compChoice} beats  your ${userChoice}`;
         msg.style.backgroundColor="red"
    }
  }

  // 4. 
const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    //now computer choice generate -> modular(fucntion samall task wwe can use it later on,so we genrachoice using another function)
    const compChoice=genCompChoice(); // take choice from function
     console.log("computer choice = ",compChoice);
    
     //fight
      if(userChoice === compChoice){
        //draw game 
        drawGame();
      }else{
        let userwin = true; //consider
        if(userChoice === "rock"){
          //scissor,paper
        userwin=compChoice=== "paper"?false:true;
        }else if(userChoice==="paper"){
            // rock, scissor
            userwin=compChoice==="scissor"?false:true;
        }else{
          // rock,paper
         userwin= compChoice==="rock"?false:true;
        }
        showWinner(userwin,userChoice,compChoice);
      }
}


// 3. div and img size is same so on div add eventlistner
// meaning you can click on div or img will be same cause same size (you can geiv img also instead of div)
choices.forEach((choice)=>{
  
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was click",userChoice);
        playGame(userChoice);//call
    })
})