/** @license MIT License (c) copyright 2016 original author or authors */

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
  if (!mCheck(n, m)) {
    throw new Error('mZeros expects 2 arguments and for them to be numbers')
  }

  const mtx = new Array(n)

  for (let i = 0; i < n; i++) {
    const row = new Array(m)
    mtx[i] = row

    for (let j = 0; j < m; j++) {
      row[j] = 0
    }
  }
  return mtx
}

const mCheck = function mCheck (n, m) {
  if (typeof n !== 'number' || typeof m !== 'number' || !n && !m) {
    return false
  }
  return true
}
