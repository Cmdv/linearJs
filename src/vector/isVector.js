/** @license MIT License (c) copyright 2016 original author or authors */

const noVector = () => {
  throw new Error('A value is needed for a vector')
}
const noNumbers = () => {
  throw new Error('A vector can only be of numerical values')
}
const noLength = () => {
  throw new Error('A vector can only be a array with more than 2 values `[1, 2]`, ' +
    'it cannot be: a single number `1`, nested arrays, or a matrix')
}

const vectorLength = len => len >= 2 ? true : noLength()
const isNumber = x => typeof x === 'number' ? true : noNumbers()
const allNumbers = v => v.every(isNumber)
const isVector = v => (!v) ? noVector() : allNumbers(v) && vectorLength(v.length)

export {isVector}
