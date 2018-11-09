import { calculateStateChange } from "./handleInput";
import { updateUi } from "./updateUi";

const initialState = Object.freeze({
  display: 0, // the calculator display
  operator: "", // active operator + - * /
  pending: "", // pending calculation to allow calculating precedence operations and updating display correctly
  sequence: "", // the final sequence of numbers and operators to calculate
  type: "", // was action a number or operator, used to concatenate number (or not)
  lastOperator: "" // used to determine calculating an interim value
});

const resetState = () => initialState;

let state = Object.assign({}, initialState);

// Get references to DOM elements
const dom = {
  calculator: document.querySelector("#calculator"),
  display: document.querySelector("#calculator .display"),
  resetBtn: document.querySelector("#calculator button[type=reset]")
};

const handleClick = e => {
  e.preventDefault();
  const { type, value } = e.target;

  // Add support for keying directly in input field later but for now ignore
  if (type === "text") {
    return;
  }

  const stateChanges =
    type === "reset" ? resetState() : calculateStateChange(state, value);

  // update state object
  state = Object.assign({}, stateChanges);

  // update UI
  updateUi(state, dom);
};

function attachListener() {
  dom.calculator.addEventListener("click", handleClick);
}

attachListener();
