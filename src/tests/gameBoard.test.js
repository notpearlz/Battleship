import { GameBoard } from "../modules/gameBoard.js";

const board = new GameBoard();

afterEach(() => {
  //board.printBoard();
});

test("gameOver", () => {
  expect(board.gameOver()).toBe(true);
});
test("placeShip", () => {
  expect(board.placeShip(0, 0)).toBe(true);
  expect(board.placeShip(0, 0)).toBe(false);
});

test("getShip", () => {
  expect(board.getShip(0, 0)).toEqual({ length_: 0, hit_: 0, sunk_: false });
  expect(board.getShip(1, 1)).toBe(null);
});

test("attackShip", () => {
  expect(board.attackShip(0, 0)).toBe(true);
  expect(board.attackShip(1, 1)).toBe(false);
});
