import {
  handleNumber,
  handleAddOrSubtract,
  handleDivideOrMultiply,
  handleEquals
} from "../src/inputChange";

describe("Number change", () => {
  test("Enters 1st number", () => {
    const prevState = {
      display: "0",
      operator: "",
      pending: "",
      sequence: ""
    };
    const actual = handleNumber(prevState, "2");
    const expected = {
      display: "2",
      operator: "",
      pending: "2",
      sequence: "",
      type: "number"
    };
    expect(actual).toEqual(expected);
  });

  test("Concatenates 2nd number", () => {
    const prevState = {
      display: "1",
      operator: "",
      pending: "1",
      sequence: "",
      type: "number"
    };
    const actual = handleNumber(prevState, "2");
    const expected = {
      display: "12",
      operator: "",
      pending: "12",
      sequence: "",
      type: "number"
    };
    expect(actual).toEqual(expected);
  });

  test("Concatenates decimal point", () => {
    const prevState = {
      display: "1",
      operator: "",
      pending: "1",
      sequence: "",
      type: "number"
    };
    const actual = handleNumber(prevState, ".");
    const expected = {
      display: "1.",
      operator: "",
      pending: "1.",
      sequence: "",
      type: "number"
    };
    expect(actual).toEqual(expected);
  });

  test("Enters number after operator", () => {
    const prevState = {
      display: "2",
      operator: "+",
      pending: "",
      sequence: "2",
      type: "operator"
    };
    const actual = handleNumber(prevState, "5");
    const expected = {
      display: "5",
      operator: "",
      pending: "5",
      sequence: "2+",
      type: "number"
    };
    expect(actual).toEqual(expected);
  });
});

describe("Operator change", () => {
  test("Enters +", () => {
    const prevState = {
      display: "2",
      operator: "",
      pending: "2",
      sequence: "",
      type: "number"
    };
    const actual = handleAddOrSubtract(prevState, "+");
    const expected = {
      display: 2,
      operator: "+",
      pending: "",
      sequence: 2,
      type: "operator",
      lastOperator: "addOrSubtract"
    };
    expect(actual).toEqual(expected);
  });

  test("Enters * after 3 + 4", () => {
    const prevState = {
      display: "4",
      operator: "",
      pending: "4",
      sequence: "3+",
      type: "number"
    };
    const actual = handleDivideOrMultiply(prevState, "*");
    const expected = {
      display: "4",
      operator: "*",
      pending: "4",
      sequence: "3+",
      type: "operator",
      lastOperator: "divideOrMultiply"
    };
    expect(actual).toEqual(expected);
  });

  test("Continues after =", () => {
    const prevState = {
      display: "7",
      operator: "",
      pending: "",
      sequence: "7",
      type: "number"
    };
    const actual = handleDivideOrMultiply(prevState, "*");
    const expected = {
      display: "7",
      operator: "*",
      pending: "",
      sequence: "7",
      type: "operator",
      lastOperator: "divideOrMultiply"
    };
    expect(actual).toEqual(expected);
  });
});
