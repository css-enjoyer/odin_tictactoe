
// ------------------ Board ------------------
let boardObject = {
    cell0: 0, cell1: 0, cell2: 0,  
    cell3: 0, cell4: 0, cell5: 0,  
    cell6: 0, cell7: 0, cell8: 0,  
};
// ## Select each cell and insert into array
let cells = [];
for (let i = 0; i < 9; i++) {
    cells[i] = document.querySelector(`#cell-${i}`);
    cells[i].addEventListener("click", () => {
        console.log(boardObject);
        if(cells[i].innerHTML === "") {
            if(players.playerX) {
                cells[i].innerHTML = "X";
                players.playerX = false;
                players.playerO = true;
                boardObject["cell" + i] = 1;
            } else {
                cells[i].innerHTML = "O";
                players.playerX = true;
                players.playerO = false;
                boardObject["cell" + i] = 2;
            }
        }
        if(checkWin()) {
            gameEnd();
        };
    });
};

// ------------------ Players ------------------
let players = {
    playerX: true,
    playerO: false,
};

// ------------------ Game ------------------
let gameBoard = {
    grid: boardObject,
    gameStart: false,
    gameEnd: false
};

// ## GameCycle 
let popup = document.querySelector(".popup");
popup.addEventListener("click", () => {
    // popup.style.display = "none";
    popup.classList.toggle("popup-visible");
    for(let prop in boardObject) {
        boardObject[prop] = 0;
    }
    for (let i = 0; i < 9; i++) {
        document.querySelector(`#cell-${i}`).innerHTML = "";
        console.log(`#cell-${i}`);
    }
});
function gameEnd() {
    // popup.style.display = "grid";
    popup.classList.toggle("popup-visible");
};

// ## Win Conditions
function checkWin() {
    // ### Horizontal Alignments
    if (boardObject.cell0 !== 0 && boardObject.cell0 === boardObject.cell1 && boardObject.cell1 === boardObject.cell2) {
        if(boardObject.cell0 === 1) {
            console.log("X wins - horizontal line");
            return true;
        }
        else if(boardObject.cell0 === 2) {
            console.log("O wins - horizontal line");
            return true;
        }
    } else if (boardObject.cell3 !== 0 && boardObject.cell3 === boardObject.cell4 && boardObject.cell4 === boardObject.cell5) {
        if(boardObject.cell3 === 1) {
            console.log("X wins - horizontal line");
            return true;
        }
        else if(boardObject.cell3 === 2) {
            console.log("O wins - horizontal line");
            return true;
        }
    } else if (boardObject.cell6 !== 0 && boardObject.cell6 === boardObject.cell7 && boardObject.cell7 === boardObject.cell8) {
        if(boardObject.cell6 === 1) {
            console.log("X wins - horizontal line");
            return true;
        }
        else if(boardObject.cell6 === 2) {
            console.log("O wins - horizontal line");
            return true;
        }
    }  
    // ### Vertical Alignments
    if (boardObject.cell0 !== 0 && boardObject.cell0 === boardObject.cell3 && boardObject.cell3 === boardObject.cell6) {
        if(boardObject.cell0 === 1) {
            console.log("X wins - vertical line");
            return true;       
        }
        else if(boardObject.cell0 === 2) {
            console.log("O wins - vertical line");
            return true;       
        }
    } else if (boardObject.cell1 !== 0 && boardObject.cell1 === boardObject.cell4 && boardObject.cell4 === boardObject.cell7) {
        if(boardObject.cell1 === 1) {
            console.log("X wins - vertical line");
            return true;       
        }
        else if(boardObject.cell1 === 2) {
            console.log("O wins - vertical line");
            return true;       
        }
    } else if (boardObject.cell2 !== 0 && boardObject.cell2 === boardObject.cell5 && boardObject.cell5 === boardObject.cell8) {
        if(boardObject.cell2 === 1) {
            console.log("X wins - vertical line");
            return true;       
        }
        else if(boardObject.cell2 === 2) {
            console.log("O wins - vertical line");
            return true;       
        }
    }  
    // ### Diagonal Alignments
    if (boardObject.cell0 !== 0 && boardObject.cell0 === boardObject.cell4 && boardObject.cell4 === boardObject.cell8) {
        if(boardObject.cell0 === 1) {
            console.log("X wins - diagonal line");
            return true;       
        }
        else if(boardObject.cell0 === 2) {
            console.log("O wins - diagonal line");
            return true;       
        }
    } else if (boardObject.cell2 !== 0 && boardObject.cell2 === boardObject.cell4 && boardObject.cell4 === boardObject.cell6) {
        if(boardObject.cell2 === 1) {
            console.log("X wins - diagonal line");
            return true;       
        }
        else if(boardObject.cell2 === 2) {
            console.log("O wins - diagonal line");
            return true;       
        }
    } else if (boardObject.cell2 !== 0 && boardObject.cell2 === boardObject.cell5 && boardObject.cell5 === boardObject.cell8) {
        if(boardObject.cell2 === 1) {
            console.log("X wins - diagonal line");
            return true;       
        }
        else if(boardObject.cell2 === 2) {
            console.log("O wins - diagonal line");
            return true;       
        }
    }  
};





