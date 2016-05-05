/** @license MIT License (c) copyright 2016 original author or authors */

import { isMatrix } from './util/matrix-util'

// TODO: creat just empty matrix [[],[]]
const mCreate = (...sizes) => initialValue => {
  if (typeof sizes[0] !== 'number') {
    throw new Error('to create a vectors you must use numbers')
  }
  return _mCreate(sizes, initialValue, sizes.length - 1, 0)
}

const _mCreate = (sizes, initialValue, len, index) =>
  Array.from({ length: sizes[index] }, () =>
    index === len ? initialValue : _mCreate(sizes, initialValue, len, index + 1))

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
 * @param {Number} sizes of an array or number to randomise
 * @throws if values is not a valid numerical number
 * @returns {Array} vector with random numbers
 */
export const mRandom = (...sizes) => {
  if (typeof sizes[0] !== 'number') {
    throw new Error('to create a vectors you must use numbers')
  }
  return _mRandom(sizes, sizes.length - 1, 0, scale)
}
const random = (i, scale) => i % 2 === 0
  ? Math.cos(Math.random() * 2.0 * Math.PI)
  : Math.sin(Math.random() * 2.0 * Math.PI)

const _mRandom = (sizes, len, index) =>
  Array.from({ length: sizes[index] },
    (a, i) => index === len ? random(i) : _mRandom(sizes, len, index + 1)
  )

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
