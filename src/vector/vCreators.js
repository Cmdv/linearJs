/** @license MIT License (c) copyright 2016 original author or authors */

import {isValidNumbers, isValidVector} from './isValid'
import {RANDOM} from '../common'

/**
 * Generates a new, empty vector from a numbers or an array
 *
 * create :: ([a] -> [a]) (a -> [a])
 * create :: 1,2 -> [1,2]
 *
 * @param {Array/Number} [els] empty vector `[0, 0, 0, 0]`
 * @returns {Array} a new vector
 */
export function vCreate (...els) {
  return Array.isArray(els[0]) ? isNestedArray(els) : isArray(els)
}

const isNestedArray = el => {
  if (!isValidNumbers(el[0])) {
    throw new Error('vCreate value should only be a number or an vector with numbers')
  }
  return el[0]
}
const isArray = el => {
  if (!isValidNumbers(el)) {
    throw new Error('vCreate value should only be a number or an vector with numbers')
  }
  return el
}

/**
 * Generates a copy of given vector
 *
 * vClone :: [a] -> [a]
 * vClone :: [1, 2] -> [1, 2]
 *
 * @param {Array} [vec] vector
 * @returns {Array} a new copy vector
 */
export function vClone (vec) {
  if (!isValidVector(vec)) {
    throw new Error('vClone accepts a valid vector with numbers only and not a matrix')
  }
  const newVec = vCreate(vec)
  for (let i = 0; i < newVec.length; ++i) {
    newVec[i] = vec[i]
  }
  return newVec
}

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
  if (!isValidNumbers(els)) {
    throw new Error('vRandom accepts a valid vector or a number')
  }
  if (!Array.isArray(els)) {
    const vec = Array(els)
    return randomGenerator(vec, scale)
  }
  return randomGenerator(els, scale)
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
 * create :: a -> [a]
 * create :: 2 -> [0,0]
 *
 * @param {Number} [num] value of length of vector
 * @returns {Array} a new vector filled with zeros
 */
export function vZeros (num) {
  const isNum = typeof num === 'number'
  if (!isNum) {
    throw new Error('vZeros only accepts a number value')
  }
  const vec = Array(num)
  for (let i = 0; i < vec.length; ++i) {
    vec[i] = 0
  }
  return vec
}
