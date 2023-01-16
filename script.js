
// ------ Game Object ------
const game = {

};


// ------ Players Object ------
const players = {
    playerO: "O",
    playerX: "✖",
};

// ------ Board Object ------
const board = {
    cells: []
};
for (let i = 0; i < 9; i++) {
    const cell = document.querySelector(`#cell-${i}`);
    board.cells.push(cell);
}
board.cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
        let player = document.getElementById("players");
        if(player.selectedIndex == 0) {
            cell.innerHTML = players.playerX;
        }
        else {
            cell.innerHTML = players.playerO;
        }
    });
});