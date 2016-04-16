/** @license MIT License (c) copyright 2016 original author or authors */

// import {isValidVector} from './isValid'
import {_curry2} from '../fp-helpers/index'

/**
 * vAdd adds 2 vectors together and returns the addition
 * in a single vector.
 *
 * vMap :: ([a] -> [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Function} out vector
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
 * vAddSelf :: [a] -> [b]
 *
 * @param {Array} a vector
 * @returns {Function} out vector
 */
export const vAddSelf = function vAddSelf (a) {
  return vAdd(a, a)
}

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
 * vAdd adds 2 vectors together and returns the addition
 * in a single vector.
 *
 * vMap :: ([a] , [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Function} out vector
 */
export const vSubtract = _curry2(function vAdd (a, b) {
  const l = a.length
  const vec = []
  for (let i = 0; i < l; ++i) {
    vec[i] = a[i] - b[i]
  }
  return vec
})
