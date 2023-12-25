let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let u_score = document.querySelector("#user-score");
let c_score = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");


const compgenchoice = () =>{
    const options = ["rock", "paper", "scissors"]
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}

const drawgame = ()=>{
    console.log("Game was a Draw");
    msg.innerText = "Draw!!, Play again";
    msgcontainer.style.backgroundColor = "#081b31";
}

const wingame = () =>{
    console.log("You have won the Game");
    msg.innerText = "You Have Won the Game!";
    userscore+=1;
    u_score.innerText = userscore;
    msgcontainer.style.backgroundColor = "green";
}

const lostgame = ()=>{
    console.log("You have lost the Game");
    msg.innerText = "You Have Lost the Game:(";
    compscore+=1;
    c_score.innerText = compscore;
    msgcontainer.style.backgroundColor = "red";
}

const playgame = (userchoice) =>{
    console.log("User Choice is =", userchoice);
    let compchoice = compgenchoice();
    console.log("Comp Choice is =", compchoice);

    if(userchoice===compchoice){
        drawgame();
    }
    else if(userchoice==="rock"){
        if(compchoice==="paper"){
            lostgame();
        }else{
            wingame();
        }
    }
    else if(userchoice==="paper"){
        if(compchoice==="scissors"){
            lostgame();
        }else{
            wingame();
        }
    }
    else{
        if(compchoice==="rock"){
            lostgame();
        }else{
            wingame();
        }
    }
} 

choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    })
})