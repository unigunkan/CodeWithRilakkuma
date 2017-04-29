// Rilakkuma Tic-Tac-Toe
//
// To make the tic-tac-toe game work, you will need to implement the functions
// below that are marked with "TODO" comments. The functions whose names end
// with an underscore ( _ ) are optional helper functions. You don't have to
// implement them, but if you do, they might be helpful in your other functions.
// Here are the global variables already declared and functions already
// implemented that you can use in your code:
() => {

  /**
   * Whether the game is over or not. Is false at first.
   * @type {boolean}
   */
  GAME_OVER;

  /**
   * Cell types. You can check the type of a cell with the getCellType()
   * function.
   * @type {string}
   */
  RILA;
  KORILA;
  EMPTY;

  /**
   * Whose turn it is. Either RILA or KORILA. Is RILA at first.
   * @type {string}
   */
  TURN;

  /**
   * Gets the type of the cell in the given row and column.
   * @param {number} row
   * @param {number} col
   * @returns {string} Either RILA or KORILA.
   */
  function getCellType(row, col) {}

  /**
   * Sets the type of the cell in the given row and column.
   * @param {number} row
   * @param {number} col
   * @param {string} cellType - Should be RILA or KORILA.
   */
  function setCellType(row, col, cellType) {}

  /**
   * Empties the cell (i.e. resets its cell type) in the given row and column.
   * @param {number} row
   * @param {number} col
   */
  function emptyCell(row, col) {}

  /**
   * Shows the game reset button, which should be shown when a game is over.
   */
  function showResetButton() {}

  /**
   * Hides the game reset button.
   */
  function hideResetButton() {}

  /**
   * Adds highlight to the cell in the given row and column. A cell should be
   * highlighted when it's part of a three-in-a-row.
   * @param {number} row
   * @param {number} col
   */
  function addHighlight(row, col) {}

  /**
   * Removes highlight from the cell in the given row and column. Use this when
   * resetting the game board.
   * @param {number} row
   * @param {number} col
   */
  function removeHighlight(row, col) {}
};



// And below are all the functions you will implement. Feel free to add your own
// helper functions if you feel like your functions are getting too long (20
// lines per function is a good threshold).

/**
 * Called when the reset button is pressed.
 * Empties and removes highlight from every cell. Also hides the reset button
 * and makes it Rilakkuma's turn.
 */
function onResetButtonPressed() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      emptyCell(row, col);
      removeHighlight(row, col);
    }
  }
  hideResetButton();
  TURN = RILA;
  GAME_OVER = false;
}

/**
 * Called when the cell at (row, col) has been clicked.
 * If the cell is already taken, does nothing. Otherwise, lets the current
 * player take the cell, and checks if they won. If they won, highlights all the
 * cells that are part of a three-in-a-row, and shows the reset button. Switches
 * turns to the next player.
 * @param {number} row
 * @param {number} col
 */
function onCellClicked(row, col) {
  if (getCellType(row, col) !== EMPTY || GAME_OVER) {
    return;
  }
  setCellType(row, col, TURN);
  if (currentPlayerWon_()) {
    highlightWinningCells_();
    gameOver_();
  } else if (isBoardFull_()) {
    gameOver_();
  } else {
    switchTurns();
  }
}

function gameOver_() {
  GAME_OVER = true;
  showResetButton();
}

/**
 * @returns {boolean}
 */
function currentPlayerWon_() {
  const trios = [];
  for (let row = 0; row < 3; row++) {
    trios.push([{row: row, col: 0}, {row: row, col: 1}, {row: row, col: 2}]);
  }
  for (let col = 0; col < 3; col++) {
    trios.push([{row: 0, col: col}, {row: 1, col: col}, {row: 2, col: col}]);
  }
  // Top-left to bottom-right diagonal:
  trios.push([{row: 0, col: 0}, {row: 1, col: 1}, {row: 2, col: 2}]);
  // Top-right to bottom-left diagonal:
  trios.push([{row: 0, col: 2}, {row: 1, col: 1}, {row: 2, col: 0}]);

  for (let trio of trios) {
    if (isTrioOfSameType_(...trio) &&
        (getCellType(trio[0].row, trio[0].col) === TURN)) {
      return true;
    }
  }
  return false;
}

/**
 * Switches TURN between RILA and KORILA.
 */
function switchTurns() {
  TURN = (TURN === RILA ? KORILA : RILA);
}

/**
 * Highlight all the cells that are part of a three-in-a-row.
 */
function highlightWinningCells_() {
  for (let row = 0; row < 3; row++) {
    maybeHighlightCellsInRow_(row);
  }
  for (let col = 0; col < 3; col++) {
    maybeHighlightCellsInCol_(col);
  }
  maybeHighlightTopLeftDiag_();
  maybeHighlightTopRightDiag_();
}

/**
 * @param {number} row
 */
function maybeHighlightCellsInRow_(row) {
  maybeHighlightTrio_(
      {row: row, col: 0}, {row: row, col: 1}, {row: row, col: 2});
}

/**
 * @param {number} col
 */
function maybeHighlightCellsInCol_(col) {
  maybeHighlightTrio_(
      {row: 0, col: col}, {row: 1, col: col}, {row: 2, col: col});
}


function maybeHighlightTopLeftDiag_() {
  maybeHighlightTrio_({row: 0, col: 0}, {row: 1, col: 1}, {row: 2, col: 2});
}

function maybeHighlightTopRightDiag_() {
  maybeHighlightTrio_({row: 0, col: 2}, {row: 1, col: 1}, {row: 2, col: 0});
}

/**
 * @param {{row: number, col: number}} cell0
 * @param {{row: number, col: number}} cell1
 * @param {{row: number, col: number}} cell2
 */
function maybeHighlightTrio_(cell0, cell1, cell2) {
  if (isTrioOfSameType_(cell0, cell1, cell2) &&
      getCellType(cell0.row, cell0.col) === TURN) {
    addHighlight(cell0.row, cell0.col);
    addHighlight(cell1.row, cell1.col);
    addHighlight(cell2.row, cell2.col);
  }
}

/**
 * @param {{row: number, col: number}} cell0
 * @param {{row: number, col: number}} cell1
 * @param {{row: number, col: number}} cell2
 */
function isTrioOfSameType_(cell0, cell1, cell2) {
  return (getCellType(cell0.row, cell0.col) ===
          getCellType(cell1.row, cell1.col)) &&
         (getCellType(cell1.row, cell1.col) ===
          getCellType(cell2.row, cell2.col));
}

/**
 * @returns {boolean}
 */
function isBoardFull_() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (getCellType(row, col) === EMPTY) {
        return false;
      }
    }
  }
  return true;
}
