/** @license MIT License (c) copyright 2016 original author or authors */

import { _curry2, _zipWith2 } from '../util/fp-functions'
import { vAdd } from '../vector/vOperators'

/**
 * vAdd adds 2 matrices together and returns the addition
 * in a single matrix.
 *
 * vAdd :: :: ([a], [b]) -> ([a] + [b]) -> [c]
 *
 * @param {Array} a matrix
 * @param {Array} b matrix
 * @returns {Array} [vec] single matrix with result of the addition.
 */
export const mAdd = _curry2((m1, m2) => _zipWith2(vAdd, m1, m2))

/**
 * vAddSelf adds a given matrix with it self and return the
 * addition in a single matrix
 *
 * vAddSelf :: [a] -> ([a] + [a]) -> [a]
 *
 * @param {Array} a matrix
 * @returns {Array} single matrix with result of the addition.
 */
export const mAddSelf = a => _zipWith2(vAdd, a, a)
