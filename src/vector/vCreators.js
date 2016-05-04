/** @license MIT License (c) copyright 2016 original author or authors */

import {isValidNumbers} from './util/vector-utils'
import {_curry2} from '../util/fp-functions'
import {RANDOM} from '../common'

/**
 * Generates a new, empty vector from a set of numbers or an array, you can
 * create new vectors by just creating an array but this is a helper function.
 *
 * vCreate :: a -> [a]
 * vCreate :: (2)(0) -> [0, 0]
 *
 * @param {Number} num: length of the vector
 * @param {Number} initialValue: number to fill each vector value with
 * @throws if value isn't a number
 * @returns {Array} a new vector
 */
export const vCreate = _curry2((num, initialValue = 0) => {
  if (typeof num !== 'number' || typeof initialValue !== 'number') {
    throw new Error('value should be a number to create a vector')
  }
  return Array.from({ length: num }, () => initialValue)
})

/**
 * Generates a copy/clone of given vector
 *
 * vClone :: [a] -> [a]
 * vClone :: [1, 2] -> [1, 2]
 *
 * @param {Array} [vec] vector
 * @throws if not a valid number or valid vector
 * @returns {Array} a new copy vector
 */
export function vClone (vec) {
  if (!Array.isArray(vec)) {
    throw new Error('vClone only accepts a valid vector')
  }
  return Array.from(vec)
}

/**
 * Generates a random vector with the given scale which is set to 1 if empty.
 * Takes either a number which dictates the length of vector given back or
 * converts an existing vector into random numbers
 *
 * vRandom :: ([a] -> [a]) (a -> [a])
 * vRandom :: ([0] -> [0.294850]) (2 -> [0.294850, -0.3084532])
 *
 * @param {Array, Number} a of an array or number to randomise
 * @param {Number} [scale] [scale = 1.0] Scale of the resulting vector. If omitted,
 * a unit vector will be returned
 * @throws if values is not a valid numerical number
 * @returns {Array} vector with random numbers
 */
export function vRandom (a, scale = 1.0) {
  if (!isValidNumbers(a)) {
    throw new Error('vRandom accepts a valid vector or a number')
  }
  if (!Array.isArray(a)) {
    const vec = Array(a)
    return randomGenerator(vec, scale)
  }
  return randomGenerator(a, scale)
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
 * Generates a new, empty vector with all values being zeros
 *
 * create :: a -> [a]
 * create :: 2 -> [0,0]
 *
 * @param {Number} num: value of length of vector
 * @throws value is not a number
 * @returns {Array} a new vector filled with zeros
 */
export const vZeros = num => vCreate(num, 0)

/**
 * Generates a new, empty vector with all values being ones
 *
 * create :: a -> [a]
 * create :: 2 -> [1,1]
 *
 * @param {Number} [num] value of length of vector
 * @throws if argument is not a number
 * @returns {Array} a new vector filled with ones
 */
export const vOnes = num => vCreate(num, 1)
