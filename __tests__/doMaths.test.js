import { doMaths } from "../src/doMaths";

test("Precedence rules for multiply", () => {
  expect(doMaths("2+5*4")).toEqual(22);
});

test("Precedence rules for divide", () => {
  expect(doMaths("3+24/6")).toEqual(7);
});

test("adds: 1 + 2", () => {
  expect(doMaths("1+2")).toEqual(3);
});

test("adds: 0.1 + 0.2", () => {
  expect(doMaths("0.1+0.2")).toEqual(0.3);
});

test("subtracts: 7 - 3", () => {
  expect(doMaths("7-3")).toEqual(4);
});

test("multiplies: 4 x 5", () => {
  expect(doMaths("4*5")).toEqual(20);
});

test("divides: 8 / 4", () => {
  expect(doMaths("8/4")).toEqual(2);
});

test("handles strings: 18 x 3", () => {
  expect(doMaths("18*3")).toEqual(54);
});
