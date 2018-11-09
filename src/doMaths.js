// could compose these functions and be declarative
// but for simplicity just use an imperative approach.

// floatingPointPrecision :: Number -> Number
const floatingPointPrecision = n => Math.floor(n * 1000000) / 1000000;

// doMaths :: [] -> Number
function doMaths(value = 0) {
  return floatingPointPrecision(eval(value));
}

export { doMaths };
