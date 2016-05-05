/** @license MIT License (c) copyright 2016 original author or authors */

import { _curry2, _zipWith2 } from '../util/fp-utils'
import { vAdd, vDivide, vMultiply, vSubtract } from '../vector/vOperators'

/**
 * mAdd adds 2 matrices together and returns the addition
 * in a single matrix.
 *
 * mAdd :: :: ([a], [b]) -> ([a] + [b]) -> [c]
 *
 * @param {Array} a matrix
 * @param {Array} b matrix
 * @returns {Array} a matrix with result of the addition.
 */
export const mAdd = _curry2((m1, m2) => _zipWith2(vAdd, m1, m2))

/**
 * mAddSelf adds a given matrix with it self and return the
 * addition in a matrix
 *
 * mAddSelf :: [a] -> ([a] + [a]) -> [a]
 *
 * @param {Array} a matrix
 * @returns {Array} [mtx] a matrix with result of the addition.
 */
export const mAddSelf = a => _zipWith2(vAdd, a, a)

/**
 * mDivide adds 2 matrices together and returns the addition
 * in a matrix.
 *
 * mDivide :: :: ([a], [b]) -> ([a] / [b]) -> [c]
 *
 * @param {Array} a matrix
 * @param {Array} b matrix
 * @returns {Array} [mtx] a matrix with result of the division.
 */
export const mDivide = _curry2((a1, a2) => _zipWith2(vDivide, a1, a2))

/**
 * mMultiply multiplies 2 matrices together and returns the result
 * in a matrix.
 *
 * mMultiply :: ([a], [b]) -> ([a] * [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Array} [vec] single vector with result of the multiplication.
 */
export const mMultiply = _curry2((a1, a2) => _zipWith2(vMultiply, a1, a2))

/**
 * mSubtract subtracts 2 matrices together and returns the result
 * in a single matrix.
 *
 * mSubtract :: ([a], [b]) -> ([a] - [b]) -> [c]
 *
 * @param {Array} a matrix
 * @param {Array} b matrix
 * @returns {Array} [mtx] single matrix with result of the subtraction.
 */
export const mSubtract = _curry2((a1, a2) => _zipWith2(vSubtract, a1, a2))
