/** @license MIT License (c) copyright 2016 original author or authors */

import { isMatrix } from './util/matrix-util'

const mCreate = (...sizes) => initialValue => {
  if (typeof sizes[0] !== 'number') {
    throw new Error('to create a vectors you must use numbers')
  }
  return Array.from({ length: sizes[0] }, () =>
    sizes.length === 1 ? initialValue : mCreate(...sizes.slice(1))(initialValue))
}

/**
 * Generates a copy/clone of given matrix
 *
 * mClone :: [a] -> [a]
 * mClone :: [[1, 2], [1, 2]] -> [[1, 2], [1, 2]]
 *
 * @param {Array} [mtx] matrix
 * @throws if not a valid matrix
 * @returns {Array} a new copy of given matrix
 */
export const mClone = (...mtx) => {
  if (!isMatrix(mtx)) {
    throw new Error('mClone() only accepts a matrix')
  }
  return Array.from(mtx[0])
}

/**
 * Generates a random matrix with the given scale which is set to 1 if empty.
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
// export function mRandom (a, b, scale = 1.0) {
  // if (!isValidNumbers(a) || !isValidNumbers(b)) {
  //   throw new Error('vRandom accepts a valid vector or a number')
  // }
//   if (!Array.isArray(a) && !Array.isArray(b)) {
//     const vec = Array(a)
//     return randomGenerator(vec, scale)
//   }
//   return randomGenerator(a, scale)
// }
//
// const randomGenerator = (vec, scale) => {
//   for (let i = 0; i < vec.length; ++i) {
//     const r = RANDOM() * 2.0 * Math.PI
//     vec[i] % 2 === 0
//       ? vec[i] = Math.cos(r) * scale
//       : vec[i] = Math.sin(r) * scale
//   }
//   return vec
// }

/**
 * mZeros - Generates zeros from given numbers
 *
 * mZeros :: a, b -> [[a]]
 * mZeros :: 2, 2 -> [[0, 0], [0, 0]]
 *
 * @param {Number} args number
 * @throws if arguments are not numbers
 * @returns {Array} a new matrix with zeros
 */
export const mZeros = (...args) => mCreate(...args)(0)

/**
 * mOnes - Generates ones from given numbers
 *
 * mOnes :: a, b -> [[a]]
 * mOnes :: 2, 2 -> [[1, 1], [1, 1]]
 *
 * @param {Number} args number
 * @throws if arguments are not numbers
 * @returns {Array} a new matrix with zeros
 */
export const mOnes = (...args) => mCreate(...args)(1)
