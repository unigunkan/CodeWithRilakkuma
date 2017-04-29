// Rilakkuma Tic-Tac-Toe
//
// To make the tic-tac-toe game work, you will need to implement the functions
// below that are marked with "TODO" comments. The functions whose names end
// with an underscore ( _ ) are optional helper functions. The helper functions
// won't be called by the external code so you don't have to implement them, but
// if you do, they might be helpful in your other functions. Here are the global
// variables already declared and functions already implemented that you can use
// in your code:
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
   * @param {number} row 0, 1, or 2.
   * @param {number} col 0, 1, or 2.
   * @returns {string} Either RILA or KORILA.
   */
  function getCellType(row, col) {}

  /**
   * Sets the type of the cell in the given row and column.
   * @param {number} row 0, 1, or 2.
   * @param {number} col 0, 1, or 2.
   * @param {string} cellType - Should be RILA or KORILA.
   */
  function setCellType(row, col, cellType) {}

  /**
   * Empties the cell (i.e. resets its cell type) in the given row and column.
   * @param {number} row 0, 1, or 2.
   * @param {number} col 0, 1, or 2.
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
   * @param {number} row 0, 1, or 2.
   * @param {number} col 0, 1, or 2.
   */
  function addHighlight(row, col) {}

  /**
   * Removes highlight from the cell in the given row and column. Use this when
   * resetting the game board.
   * @param {number} row 0, 1, or 2.
   * @param {number} col 0, 1, or 2.
   */
  function removeHighlight(row, col) {}
};



// Below are all the functions you will implement. Feel free to add your own
// helper functions if you feel like your functions are getting too long (20
// lines per function is a good threshold). It might be helpful to implement
// these methods in terms of the helper functions first.

/**
 * Called when the cell at (row, col) has been clicked.
 * If the cell is already taken, does nothing. Also does nothing if the game is
 * already over. Otherwise, lets the current player take the cell, and checks if
 * they won. If they won, highlights all the cells that are part of a
 * three-in-a-row, and shows the reset button. Otherwise switches turns to the
 * next player.
 * @param {number} row 0, 1, or 2.
 * @param {number} col 0, 1, or 2.
 */
function onCellClicked(row, col) {
  // TODO: Implement this.
}

/**
 * Called when the reset button is pressed.
 * Empties and removes highlight from every cell. Also hides the reset button
 * and makes it Rilakkuma's turn.
 */
function onResetButtonPressed() {
  // TODO: Implement this.
}



// The functions below are helper functions that are optional but you may find
// them useful.

/**
 * Checks if the current player has a three-in-a-row on the board. Makes no
 * changes to the board.
 * @returns {boolean}
 */
function currentPlayerWon_() {
  // TODO(optional): Implement this.
}

/**
 * Sets the GAME_OVER state and shows the reset button.
 */
function gameOver_() {
  // TODO(optional): Implement this.
}

/**
 * Highlights all the cells that are part of a three-in-a-row.
 */
function highlightWinningCells_() {
  // TODO(optional): Implement this.
}

/**
 * Checks every cell on the board and returns whether all of them are filled.
 * @returns {boolean}
 */
function isBoardFull_() {
  // TODO(optional): Implement this.
}

/**
 * Returns whether all three of the cells have the same cell type.
 * @param {{row: number, col: number}} cell0
 * @param {{row: number, col: number}} cell1
 * @param {{row: number, col: number}} cell2
 * @returns boolean
 */
function isTrioOfSameType_(cell0, cell1, cell2) {
  // TODO(optional): Implement this.
}

/**
 * Checks if the cells in the column form a three-in-a-row, and highlights them
 * if they do.
 * @param {number} col
 */
function maybeHighlightCellsInCol_(col) {
  // TODO(optional): Implement this.
}

/**
 * Checks if the cells in the row form a three-in-a-row, and highlights them if
 * they do.
 * @param {number} row
 */
function maybeHighlightCellsInRow_(row) {
  // TODO(optional): Implement this.
}

/**
 * Checks if the cells in the diagonal going from top-left to bottom-right form
 * a three-in-a-row, and highlights them if they do.
 */
function maybeHighlightTopLeftDiag_() {
  // TODO(optional): Implement this.
}

/**
 * Checks if the cells in the diagonal going from top-right to bottom-left form
 * a three-in-a-row, and highlights them if they do.
 */
function maybeHighlightTopRightDiag_() {
  // TODO(optional): Implement this.
}

/**
 * Checks if the three cells form a three-in-a-row, and highlights them if they
 * do and their cell type is the same as the current player.
 * @param {{row: number, col: number}} cell0
 * @param {{row: number, col: number}} cell1
 * @param {{row: number, col: number}} cell2
 */
function maybeHighlightTrio_(cell0, cell1, cell2) {
  // TODO(optional): Implement this.
}

/**
 * Switches TURN between RILA and KORILA.
 */
function switchTurns_() {
  // TODO(optional): Implement this.
}
