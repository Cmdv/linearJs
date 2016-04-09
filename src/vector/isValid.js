/** @license MIT License (c) copyright 2016 original author or authors */

const noVal = () => {
  throw new Error('A value is needed for a vector')
}
const noNumbers = () => {
  throw new Error('A vector can only be of numerical values')
}

const isNumber = x => typeof x === 'number' ? true : noNumbers()

const allNumbers = v => {
  for (let i = 0; i < v.length; ++i) {
    isNumber(v[i])
  }
  return true
}

const isValid = v => (!v) ? noVal() : allNumbers(v)

export {isValid}
