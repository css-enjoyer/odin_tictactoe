// ------ Board Object ------
// const board = {
//     cells: []
// };
// for (let i = 0; i < 9; i++) {
//     const cell = document.querySelector(`#cell-${i}`);
//     board.cells.push(cell);
// }
// board.cells.forEach(function(cell) {
//     cell.addEventListener('click', function() {
//         let player = document.getElementById("players");
//         if(player.selectedIndex == 0) {
//             cell.innerHTML = players.playerX;
//         }
//         else {
//             cell.innerHTML = players.playerO;
//         }
//     });
// });






// ------------------ Board ------------------
let boardObject = {
    cell0: 0, cell1: 0, cell2: 0,  
    cell3: 0, cell4: 0, cell5: 0,  
    cell6: 0, cell7: 0, cell8: 0,  
};
// ## Select each cell and insert into array
// ##### TO DO: Refine and compress this block, make checking win conditions into its own function
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
function gameEnd() {
    console.log(test);
};
// ## Win Conditions
function checkWin() {
    // ### Horizontal Alignments
    if (boardObject.cell0 !== 0 && boardObject.cell0 === boardObject.cell1 && boardObject.cell1 === boardObject.cell2) {
        if(boardObject.cell0 === 1) {
            console.log("X wins - horizontal line");

        }
        else if(boardObject.cell0 === 2) {
            console.log("O wins - horizontal line");
        }
    } else if (boardObject.cell3 !== 0 && boardObject.cell3 === boardObject.cell4 && boardObject.cell4 === boardObject.cell5) {
        if(boardObject.cell3 === 1) {
            console.log("X wins - horizontal line");
        }
        else if(boardObject.cell3 === 2) {
            console.log("O wins - horizontal line");
        }
    } else if (boardObject.cell6 !== 0 && boardObject.cell6 === boardObject.cell7 && boardObject.cell7 === boardObject.cell8) {
        if(boardObject.cell6 === 1) {
            console.log("X wins - horizontal line");
        }
        else if(boardObject.cell6 === 2) {
            console.log("O wins - horizontal line");
        }
    }  
    // ### Vertical Alignments
    if (boardObject.cell0 !== 0 && boardObject.cell0 === boardObject.cell3 && boardObject.cell3 === boardObject.cell6) {
        if(boardObject.cell0 === 1) {
            console.log("X wins - vertical line");
        }
        else if(boardObject.cell0 === 2) {
            console.log("O wins - vertical line");
        }
    } else if (boardObject.cell1 !== 0 && boardObject.cell1 === boardObject.cell4 && boardObject.cell4 === boardObject.cell7) {
        if(boardObject.cell1 === 1) {
            console.log("X wins - vertical line");
        }
        else if(boardObject.cell1 === 2) {
            console.log("O wins - vertical line");
        }
    } else if (boardObject.cell2 !== 0 && boardObject.cell2 === boardObject.cell5 && boardObject.cell5 === boardObject.cell8) {
        if(boardObject.cell2 === 1) {
            console.log("X wins - vertical line");
        }
        else if(boardObject.cell2 === 2) {
            console.log("O wins - vertical line");
        }
    }  
    // ### Diagonal Alignments
    if (boardObject.cell0 !== 0 && boardObject.cell0 === boardObject.cell4 && boardObject.cell4 === boardObject.cell8) {
        if(boardObject.cell0 === 1) {
            console.log("X wins - diagonal line");
        }
        else if(boardObject.cell0 === 2) {
            console.log("O wins - diagonal line");
        }
    } else if (boardObject.cell2 !== 0 && boardObject.cell2 === boardObject.cell4 && boardObject.cell4 === boardObject.cell6) {
        if(boardObject.cell2 === 1) {
            console.log("X wins - diagonal line");
        }
        else if(boardObject.cell2 === 2) {
            console.log("O wins - diagonal line");
        }
    } else if (boardObject.cell2 !== 0 && boardObject.cell2 === boardObject.cell5 && boardObject.cell5 === boardObject.cell8) {
        if(boardObject.cell2 === 1) {
            console.log("X wins - diagonal line");
        }
        else if(boardObject.cell2 === 2) {
            console.log("O wins - diagonal line");
        }
    }  
};





