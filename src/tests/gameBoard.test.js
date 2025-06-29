import { GameBoard } from "../modules/gameBoard.js";

const board = new GameBoard();

afterEach(() => {
  board.printBoard();
});

test("gameOver", () => {
  expect(board.gameOver()).toBe(true);
});
test("placeShip", () => {
  expect(board.placeShip(0, 0)).toBe(true);
});

test("attackShip", () => {
  expect(board.attackShip(0, 0)).toBe(true);
});
