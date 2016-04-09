/** @license MIT License (c) copyright 2016 original author or authors */

import {isValid} from './isValid'
import {RANDOM} from '../common'

/**
 * Generates a new, empty vector from a numbers or an array
 *
 * create :: ([a] -> [a]) (a -> [a])
 * create :: 1,2 -> [1,2]
 *
 * @param {Array} [els] empty vector `[0, 0, 0, 0]`
 * @returns {vec} a new vector
 */
export function vCreate (...els) {
  return Array.isArray(els[0]) ? isNestedArray(els) : isArray(els)
}

const isNestedArray = el => isValid(el[0]) ? el[0] : null
const isArray = el => isValid(el) ? el : null

/**
 * Generates a random vector with the given scale which is set to 1 if empty.
 * Takes either a number which dictates the length of vector given back or
 * converts an existing vector into random numbers
 *
 * vRandom :: ([a] -> [a]) (a -> [a])
 * vRandom :: ([0] -> [0.294850]) (2 -> [0.294850, -0.3084532])
 *
 * @param {Array, Number} els of an array or number to randomise
 * @param {Number} [scale] Length of the resulting vector. If omitted,
 * a unit vector will be returned
 * @returns {Array} vector with random numbers
 */
export function vRandom (els, scale = 1.0) {
  if (isValid(els)) {
    const vec = Array(els)
    return randomGenerator(vec, scale)
  }
}

const randomGenerator = (vec, scale) => {
  for (let i = 0; i < vec.length; ++i) {
    const r = RANDOM() * 2.0 * Math.PI
    vec[i] % 2 === 0
      ? vec[i] = Math.cos(r) * scale
      : vec[i] = Math.sin(r) * scale
  }
  return vec
}

/**
 * Generates a new, empty vector filed with values zeros
 *
 * create :: ([a] -> [a]) (a -> [a])
 * create :: 1,2 -> [1,2]
 *
 * @param {Array} [els] empty vector `[0, 0, 0, 0]`
 * @returns {vec} a new vector
 */
// zero :: a -> [a]
// zero :: 4 -> [0,0,0,0]
export function vZero (els) {
  if (isValid(els)) {
    const vec = Array(els)
    for (let i = 0; i < vec.length; ++i) {
      vec[i] = 0
    }
    return vec
  }
}

// copy :: [a] -> [a]
// duplicate a (shallow duplication)
export function vCopy (vec) {
  const l = vec.length
  const newVec = vCreate(l)
  for (let i = 0; i < newVec.length; ++i) {
    newVec[i] = vec[i]
  }
  return newVec
}
