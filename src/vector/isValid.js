/** @license MIT License (c) copyright 2016 original author or authors */

// error messages
const noVal = () => {
  throw new Error('A value is needed for a vector')
}
const noArray = () => {
  throw new Error('A valid vector must be passed to this function')
}
const noNumbers = () => {
  throw new Error('A vector can only be of numerical values')
}

// loop through all array elements to check if they ar numbers
const allNumbers = v => {
  for (let i = 0; i < v.length; ++i) {
    isNumber(v[i])
  }
  return true
}
// is element number
const isNumber = x => typeof x === 'number' ? true : noNumbers()

// is the array being passed a nested array
const isNested = v => Array.isArray(v[0]) ? noArray() : isValidNumbers(v)

// check for valid numbers
export function isValidNumbers (v) {
  return (!v) ? noVal() : allNumbers(v)
}

// check if the vector is valid
export function isValidVector (v) {
  return Array.isArray(arguments[0]) && arguments.length === 1
    ? isNested(v) : noArray()
}
