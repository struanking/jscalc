// updateUi :: Object -> void
function updateUi(state, dom) {
  const { calculator, display } = dom;
  const { operator } = state;
  const pressedBtn = calculator.querySelector(".pressed");

  if (pressedBtn) {
    pressedBtn.setAttribute("aria-presssed", false);
    pressedBtn.classList.remove("pressed");
  }

  // highlight active operator
  if (operator) {
    const activeOperator = calculator.querySelector(
      `button[value="${operator}"]`
    );
    activeOperator.setAttribute("aria-presssed", true);
    activeOperator.classList.add("pressed");
  }

  // update calculator display
  display.value = state.display;
}

export { updateUi };
