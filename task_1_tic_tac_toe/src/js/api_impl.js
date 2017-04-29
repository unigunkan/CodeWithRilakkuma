
/**
 * Cell enum/consntants
 */
const RILA = "cellTypeRilakkuma";
const KORILA = "cellTypeKorilakkuma";
const EMPTY = "cellTypeEmpty";

/**
 * Globals (gasp!) to keep track of the game state.
 */
let TURN = RILA;
let GAME_OVER = false;

/**
 * @param {number} row
 * @param {number} col
 */
function animateCell_(row, col) {
  const cellImage = getCellImage_(row, col);
  const originalSize = cellImage.clientHeight;
  cellImage.style.height= `${originalSize + 10}px`;
  cellImage.style.width= `${originalSize + 10}px`;
  setTimeout(() => {
    cellImage.style.height= `${originalSize}px`;
    cellImage.style.width= `${originalSize}px`;
  }, 50);
}

/**
 * @param {number} row
 * @param {number} col
 * @returns HTMLElement
 */
function getCell_(row, col) {
  const cellId = "row" + row + "col" + col;
  return document.getElementById(cellId);
}

/**
 * @param {number} row
 * @param {number} col
 * @returns HTMLElement
 */
function getCellImage_(row, col) {
  const cell = getCell_(row, col);
  return cell.getElementsByClassName("cellImage")[0];
}

/**
 * @param {!HTMLElement} cell
 */
function onCellClickedHandler_(cell) {
  const row = Number(cell.getAttribute("row"));
  const col = Number(cell.getAttribute("col"));
  onCellClicked(row, col);
}

/**
 * Shows the game reset button, which should be shown when a game is over.
 */
function showResetButton() {
  const button = document.getElementById("resetButton");
  button.style.display = "inline";
}

/**
 * Hides the game reset button.
 */
function hideResetButton() {
  const button = document.getElementById("resetButton");
  button.style.display = "none";
}

/**
 * Sets the type of the cell in the given row and column.
 * @param {number} row
 * @param {number} col
 * @param {string} cellType - Should be RILA or KORILA.
 */
function setCellType(row, col, cellType) {
  const cell = getCell_(row, col);
  cell.classList.remove(RILA);
  cell.classList.remove(KORILA);
  cell.classList.remove(EMPTY);
  cell.classList.add(cellType);
  if (cellType !== EMPTY) {
    animateCell_(row, col);
  }
}

/**
 * Empties the cell in the given row and column.
 * @param {number} row
 * @param {number} col
 */
function emptyCell(row, col) {
  setCellType(row, col, EMPTY);
  const cellImage = getCellImage_(row, col);
  cellImage.style.height = "";
  cellImage.style.width = "";
}

/**
 * Gets the type of the cell in the given row and column.
 * @param {number} row
 * @param {number} col
 * @returns {string} Either RILA or KORILA.
 */
function getCellType(row, col) {
  const cell = getCell_(row, col);
  if (cell.classList.contains(RILA)) {
    return RILA;
  }
  if (cell.classList.contains(KORILA)) {
    return KORILA;
  }
  return EMPTY;
}

/**
 * Adds highlight to the cell in the given row and column. A cell should be
 * highlighted when it's part of a three-in-a-row.
 * @param {number} row
 * @param {number} col
 */
function addHighlight(row, col) {
  const cell = getCell_(row, col);
  cell.classList.add("cellHighlighted");
}

/**
 * Removes highlight from the cell in the given row and column. Use this when
 * resetting the game board.
 * @param {number} row
 * @param {number} col
 */
function removeHighlight(row, col) {
  const cell = getCell_(row, col);
  cell.classList.remove("cellHighlighted");
}
