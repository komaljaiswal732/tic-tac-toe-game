const boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row

    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column

    [0, 4, 8], // Main diagonal
    [2, 4, 6]  // Anti-diagonal
];

const resetGame = ()=>{
    turnO = true;
    enableBoxes ();
    msgContainer.classList.add("hide");
};

 
boxes.forEach((box) => {
    box.addEventListener("click",() => {

        console.log("box was clicked");

        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });

});

 const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }

 };

 const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }

 };



const showWinner = (winner) =>{
    msg.innerText = `congratulations ! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};

const checkWinner = () => {
    for (let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('winner',pos1Val);
                showWinner(pos1Val);
            }
        }


    }

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
