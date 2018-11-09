import {
  handleNumber,
  handleAddOrSubtract,
  handleDivideOrMultiply,
  handleEquals
} from "./inputChange";

// isOperator :: String -> Boolean
function isOperator(char) {
  const VALID_CHARS = ["+", "-", "*", "/", "="];
  return VALID_CHARS.indexOf(char) > -1;
}

// isNumberOrDot :: (Number | String) -> Boolean
const isNumberOrDot = char => /[\d\.]/.test(char);

// isOperator :: String -> Boolean
const isAddOrSubtract = char => ["+", "-"].indexOf(char) > -1;

// isOperator :: String -> Boolean
const isDivideOrMultiply = char => ["/", "*"].indexOf(char) > -1;

// calculateNewState :: (Object, String) -> Object
function calculateStateChange(prevState, newValue) {
  if (isNumberOrDot(newValue)) {
    return handleNumber(prevState, newValue);
  }

  if (isAddOrSubtract(newValue)) {
    return handleAddOrSubtract(prevState, newValue);
  }

  if (isDivideOrMultiply(newValue)) {
    return handleDivideOrMultiply(prevState, newValue);
  }

  if (newValue === "=") {
    return handleEquals(prevState, newValue);
  }

  // no matches then return previous state
  return prevState;
}

export { calculateStateChange };
