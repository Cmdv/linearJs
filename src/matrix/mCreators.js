/** @license MIT License (c) copyright 2016 original author or authors */

import {mRowLoop} from './util/matrix-util'

// TODO: add a helper function to create the inner loop as complexity is on 4 right now
/**
 * mZeros - Generates zeros from given numbers
 *
 * mZeros :: a, b -> [[a]]
 * mZeros :: [2, 2] -> [[0, 0], [0, 0]]
 *
 * @param {Number} n number
 * @param {Number} m number
 * @throws if arguments are not numbers
 * @returns {Array} a new matrix with zeros
 */
export const mZeros = function mZeros (n, m) {
  if (mNumCheck(n, m)) {
    throw new Error('mZeros expects 2 arguments and for them to be numbers')
  }
  const mtx = new Array(n)
  for (let i = 0; i < n; i++) {
    const row = new Array(m)
    mtx[i] = row
    mRowLoop(row, 0) // run the inner loop to fill row with values
  }
  return mtx
}

const mNumCheck = (n, m) => typeof n !== 'number' || typeof m !== 'number'
