/** @license MIT License (c) copyright 2016 original author or authors */

// import {isValidVector} from './isValid'
import {_curry2} from '../fp-helpers/index'

/**
 * vAdd adds 2 vectors together and returns the addition
 * in a single vector.
 *
 * vAdd :: :: ([a], [b]) -> ([a] + [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Array} [vec] single vector with result of the addition.
 */
export const vAdd = _curry2(function vAdd (a, b) {
  const l = a.length
  const vec = []
  for (let i = 0; i < l; ++i) {
    vec[i] = a[i] + b[i]
  }
  return vec
})

/**
 * vAddSelf adds a given vector with it self and return the
 * addition in a single vector
 *
 * vAddSelf :: [a] -> ([a] + [a]) -> [b]
 *
 * @param {Array} a vector
 * @returns {Array} single vector with result of the addition.
 */
export const vAddSelf = function vAddSelf (a) {
  return vAdd(a, a)
}

/**
 * vDivide adds 2 vectors together and returns the addition
 * in a single vector.
 *
 * vDivide :: :: ([a], [b]) -> ([a] / [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Array} [vec] single vector with result of the division.
 */
export const vDivide = _curry2(function vDivide (a, b) {
  const l = a.length
  const vec = []
  for (let i = 0; i < l; ++i) {
    vec[i] = a[i] / b[i]
  }
  return vec
})

/**
 * vDot Calculates the dot product of 2 given vectors
 *
 * vDot :: [a] -> a
 * vDot :: [2,2] -> [4,4]
 *
 * @param {Array} [a] vector
 * @param {Array} [b] = [a] vector if not present uses vector [a]
 * @returns {Number} dot product of [a] and [b]
 */
export const vDot = (a, b = a) => {
  const l = a.length
  const vec = new Array(a)
  if (l !== b.length) {
    throw new Error('vectors need to be of matching lengths')
  }
  for (let i = 0; i < l; i++) {
    vec[i] = a[i] * b[i]
  }
  return vReduce((x, y) => x + y, vec)
}

/**
 * vLength Calculates the length of a vector and returns a number by squaring a
 * dot product of the vector.
 *
 * vLength :: [a] -> num
 * vLength :: [0,3,4,5] -> 7.0710678118654755
 *
 * @param {Array} a vector
 * @returns {Number} d a number with the length of the vector
 */
export const vLength = a => {
  const d = vDot(a, a)
  return Math.sqrt(d)
}

/**
 * vMap transform each element of a vector with a given function and returns the
 * transformed values in a new vector.
 *
 * vMap :: (a -> b) -> [a] -> [b]
 *
 * @param {Function} f function
 * @param {Array} a vector
 * @returns {Array} [vec] vector
 */
export const vMap = (f, a) => {
  const l = a.length
  const vec = new Array(l)
  for (let i = 0; i < l; ++i) {
    vec[i] = f(a[i])
  }
  return vec
}

/**
 * Reduce returns an accumulation of a function which is called x number of times
 * where x is the length of the vector element.
 *
 * vReduce :: (a -> b -> a) -> a -> [b] -> a
 *
 * @param {Function} f function
 * @param {Array} a vector
 * @param {Number} z is the initial value
 * @returns {Number} an accumulated value
 */
export const vReduce = (f, a, z = 0) => {
  let r = z
  for (let i = 0, l = a.length; i < l; ++i) {
    r = f(r, a[i], i)
  }
  return r
}

/**
 * vSubtract subtracts vectors together and returns the result
 * in a single vector.
 *
 * vSubtract :: ([a], [b]) -> ([a] - [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Array} [vec] single vector with result of the subtraction.
 */
export const vSubtract = _curry2(function vSubtract (a, b) {
  const l = a.length
  const vec = []
  for (let i = 0; i < l; ++i) {
    vec[i] = a[i] - b[i]
  }
  return vec
})

/**
 * vMultiply multiplies vectors together and returns the result
 * in a single vector.
 *
 * vMultiply :: ([a], [b]) -> ([a] * [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Array} [vec] single vector with result of the multiplication.
 */
export const vMultiply = _curry2(function vMultiply (a, b) {
  const l = a.length
  const vec = []
  for (let i = 0; i < l; ++i) {
    vec[i] = a[i] * b[i]
  }
  return vec
})
