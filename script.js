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
        if(boardObject.cell0 === 1 && boardObject.cell1 === 1 && boardObject.cell2 === 1) {
            console.log("X Wins");
            console.log(boardObject.cell0);
        }
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

// ## Win Conditions



