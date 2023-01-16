
// ------ Game Object ------
const game = {

};

// ------ Players Object ------
const players = {
    player1: "O",
    player2: "✖",
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
        // console.log(cell);
        cell.innerHTML = "✖";
    });
});