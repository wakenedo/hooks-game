const yellow = '#ffeb33'
const blue = '#3388ff'
const red = '#ff3333'

export const Combos = {

  regularCombo1: [yellow, blue, red],
  regularCombo2: [red, blue, yellow],
  weirdCombo1: [blue, yellow, red], // Not working properly iterating 2 times
  weirdCombo2: [blue, red, yellow], // Not working properly iterating 2 times
  weakCombo1: [red, yellow, blue],
  weakCombo2: [yellow, red, blue],
  weakestCombo1: [blue, red, blue], // Not working properly array seems to retain last state
  weakestCombo2: [yellow, blue, yellow], // Not working properly array seems to retain last state
  whackCombo1: [red, blue, red], //Iterating 3 points and 2 points
  whackCombo2: [red, yellow, red], //iterating non-stop
  _superCombo1: [blue, yellow, blue, red], //Not working
  _superWhack1: [blue, yellow, blue, yellow], //iterating non-stop
}