import { doMaths } from "./doMaths";

// concat :: (String, String, String) -> String
const concat = (n1 = "", n2 = "", n3 = "") => `${n1}${n2}${n3}`;

// numberChange :: (Object, (Integer | String) -> Object
function handleNumber(prevState, newNumber) {
  let pending = concat(prevState.pending, prevState.operator, newNumber);
  let sequence = prevState.sequence;

  if (["+", "-"].indexOf(prevState.operator) > -1) {
    pending = concat(prevState.pending, newNumber);
    sequence = concat(prevState.sequence, prevState.operator);
  }

  return {
    ...prevState,
    display:
      prevState.type === "number"
        ? concat(prevState.pending, newNumber)
        : newNumber,
    operator: "",
    pending,
    sequence,
    type: "number"
  };
}

// handleAddOrSubtract :: (Object, (Integer | String) -> Object
function handleAddOrSubtract(prevState, newOperator) {
  const { pending, sequence } = prevState;
  const display = doMaths(concat(sequence, pending));
  return {
    display,
    operator: newOperator,
    pending: "",
    sequence: display,
    type: "operator",
    lastOperator: "addOrSubtract"
  };
}

// handleDivideOrMultiply :: (Object, (Integer | String) -> Object
function handleDivideOrMultiply(prevState, newOperator) {
  const inProgressDisplayValue =
    prevState.lastOperator === "divideOrMultiply"
      ? doMaths(prevState.pending)
      : null;

  return {
    display: inProgressDisplayValue || prevState.display,
    operator: newOperator,
    pending: inProgressDisplayValue || prevState.pending,
    sequence: prevState.sequence,
    type: "operator",
    lastOperator: "divideOrMultiply"
  };
}

// handleEquals :: (Object, (Integer | String) -> Object
function handleEquals(prevState, newOperator) {
  const { operator, pending, sequence } = prevState;
  const newS = concat(sequence, operator, pending);
  const display = doMaths(newS);
  return {
    display,
    operator: "",
    pending: "",
    sequence: display,
    type: "operator",
    lastOperator: "="
  };
}

export {
  handleNumber,
  handleAddOrSubtract,
  handleDivideOrMultiply,
  handleEquals
};
