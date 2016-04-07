/** @license MIT License (c) copyright 2016 original author or authors */

import {isVector} from './isVector'
import {RANDOM} from '../common'

/**
 * Creates a new, empty vector
 *
 * create :: ([a] -> [a]) (a -> [a])
 * create :: 1,2 -> [1,2]
 *
 * @param {Array} [els] empty vector `[0, 0, 0, 0]`
 * @returns {vec} a new vector
 */
const isNestedArray = el => isVector(el[0]) ? el[0] : null
const isArray = el => isVector(el) ? el : null

export function vCreate (...els) {
  return Array.isArray(els[0]) ? isNestedArray(els) : isArray(els)
}

/**
 * Generates a random vector with the given scale
 *
 * vRandom :: [a] -> [a]
 * vRandom :: [0, 0] -> [0.294850, 0.982375]
 *
 * @param {Array} [v] empty vector `[0, 0, 0, 0]`
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {Array} vector with random numbers
 */
export function vRandom (v, scale = 1.0) {
  const els = Array(v)

  for (let i = 0; i < els.length; ++i) {
    const r = RANDOM() * 2.0 * Math.PI
    els[i] % 2 === 0
      ? els[i] = Math.cos(r) * scale
      : els[i] = Math.sin(r) * scale
  }
  return els
}

// zero :: a -> [a]
// zero :: 4 -> [0,0,0,0]
export function vZero (n) {
  const els = vCreate(n)
  for (let i = 0; i < n; ++i) {
    els[i] = 0
  }
  return els
}

// copy :: [a] -> [a]
// duplicate a (shallow duplication)
export function vCopy (a) {
  const l = a.length
  const b = vCreate(l)
  for (let i = 0; i < l; ++i) {
    b[i] = a[i]
  }
  return b
}
