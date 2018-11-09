import { calculateStateChange } from "../src/handleInput";

jest.mock("../src/inputChange");
const handleNumber = require("../src/inputChange").handleNumber;
const handleAddOrSubtract = require("../src/inputChange").handleAddOrSubtract;
const handleDivideOrMultiply = require("../src/inputChange")
  .handleDivideOrMultiply;

test("Invalid character returns original state", () => {
  const state = { number: "0", operator: "+" };
  expect(calculateStateChange(state, "a")).toEqual(state);
});

test("A number is passed to handleNumber", () => {
  const state = {};
  calculateStateChange(state, "1");
  expect(handleNumber).lastCalledWith(state, "1");
});

test("A dot is passed to handleNumber", () => {
  const state = {};
  calculateStateChange(state, ".");
  expect(handleNumber).lastCalledWith(state, ".");
});

test("Add operator is passed to handleAddOrSubtract", () => {
  const state = {};
  calculateStateChange(state, "+");
  expect(handleAddOrSubtract).lastCalledWith(state, "+");
});

test("Multiply operator is passed to handleDivideOrMultiply", () => {
  const state = {};
  calculateStateChange(state, "*");
  expect(handleDivideOrMultiply).lastCalledWith(state, "*");
});
