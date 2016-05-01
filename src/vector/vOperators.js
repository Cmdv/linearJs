/** @license MIT License (c) copyright 2016 original author or authors */

import {_curry2, _curry3} from '../util/fp-functions'
import {PRECISION} from '../common'
/**
 * vAdd adds 2 vectors together and returns the addition
 * in a single vector.
 *
 * vAdd :: :: ([a], [b]) -> ([a] + [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Array} [vec] single vector with result of the addition.
 */
export const vAdd = _curry2(function vAdd (a, b) {
  const l = a.length
  const vec = []
  for (let i = 0; i < l; ++i) {
    vec[i] = a[i] + b[i]
  }
  return vec
})

/**
 * vAddSelf adds a given vector with it self and return the
 * addition in a single vector
 *
 * vAddSelf :: [a] -> ([a] + [a]) -> [b]
 *
 * @param {Array} a vector
 * @returns {Array} single vector with result of the addition.
 */
export const vAddSelf = function vAddSelf (a) {
  return vAdd(a, a)
}

/**
 * vAngleFrom
 *
 * vAngleFrom :: ([a], [b]) -> a
 *
 * @param {Array} [a] vector
 * @param {Array} [b] vector
 * @returns {Number} returns theta = Math.acos(-1) || Math.acos(1).
 */
export const vAngleFrom = _curry2(function vAngleFrom (a, b) {
  if (a.length !== b.length) {
    throw new Error('vectors need to be of matching lengths')
  }
  const l = a.length
  let dot = 0
  let mod1 = 0
  let mod2 = 0

  for (let i = 0; i < l; ++i) {
    dot += a[i] * b[i]
    mod1 += a[i] * a[i]
    mod2 += b[i] * b[i]
  }

  const mod1Sqr = Math.sqrt(mod1)
  const mod2Sqr = Math.sqrt(mod1)

  return angleTheta(mod1Sqr, mod2Sqr, dot)
})

function angleTheta (mod1Sqr, mod2Sqr, dot) {
  if (mod1Sqr * mod2Sqr === 0) {
    return null
  }
  const theta = dot / (mod1Sqr * mod2Sqr)
  if (theta < -1) {
    return Math.acos(-1)
  }
  return Math.acos(1)
}

/**
* vIsParallel, works out if two vectors are parallel to each other
*
* vIsParallel :: ([a], [b]) -> bool
*
* @param {Array} [a] vector
* @param {Array} [b] vector
* @returns {Boolean} returns boolean or null
*/
export const vIsParallel = function vIsParallel (a, b) {
  const angle = vAngleFrom(a, b)
  return (angle <= PRECISION)
}

/**
 * vIsNotParallel, works out if two vectors are not parallel to each other
 *
 * vIsNotParallel :: ([a], [b]) -> bool
 *
 * @param {Array} [a] vector
 * @param {Array} [b] vector
 * @returns {Boolean} returns boolean or null
 */
export const vIsAntiParallel = function vIsAntiParallel (a, b) {
  const angle = vAngleFrom(a, b)
  return (Math.abs(angle - Math.PI) <= PRECISION)
}

/**
 * vIsPerpendicular, works out if two vectors are perpendicular to each other
 *
 * vIsPerpendicular :: ([a], [b]) -> bool
 *
 * @param {Array} [a] vector
 * @param {Array} [b] vector
 * @returns {Boolean} returns boolean or null
 */
export const vIsPerpendicular = function vIsPerpendicular (a, b) {
  const dot = vDot(a, b)
  return (Math.abs(dot) <= PRECISION)
}

/**
 * vCeil returns the smallest integer greater than or equal to a given number
 *
 * vCeil :: [a] -> a
 *
 * @param {Array} [a] function
 * @returns {Array} [vec] vector with values ceil
 */
export const vCeil = function vMax (a) {
  const l = a.length
  const vec = new Array(l)
  for (let i = 0; i < l; ++i) {
    vec[i] = Math.ceil(a[i])
  }
  return vec
}

/**
 * vDivide adds 2 vectors together and returns the addition
 * in a single vector.
 *
 * vDivide :: :: ([a], [b]) -> ([a] / [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Array} [vec] single vector with result of the division.
 */
export const vDivide = _curry2(function vDivide (a, b) {
  const l = a.length
  const vec = []
  for (let i = 0; i < l; ++i) {
    vec[i] = a[i] / b[i]
  }
  return vec
})

/**
 * vDistance Calculates the euclidean distance between two vectors
 *
 * vDistance :: ([a], [b]) -> a
 * vDistance :: ([2,2], [2,2]) -> num
 *
 * @param {Array} [a] the first operand
 * @param {Array} [b] the second operand
 * @returns {Number} distance between [a] and [b]
 */
export const vDistance = _curry2(function (a, b) {
  return Math.sqrt(vDistanceSq(a, b))
})

/**
 * vDistanceSq Calculates the squared euclidean distance between two vectors
 *
 * vDistanceSq :: ([a], [b]) -> a
 * vDistanceSq :: ([2,2], [2,2]) -> num
 *
 * @param {Array} [a] the first operand
 * @param {Array} [b] the second operand
 * @returns {Number} distance between [a] and [b]
 */
export const vDistanceSq = _curry2(function (a, b) {
  const l = a.length
  const vec = new Array(l)
  for (let i = 0; i < l; ++i) {
    const val = b[i] - a[i]
    vec[i] = val * val
  }
  return vReduce((x, y) => x + y, vec)
})

/**
 * vDot Calculates the dot product of 2 given vectors
 *
 * vDot :: [a] -> a
 * vDot :: [2,2] -> [4,4]
 *
 * @param {Array} [a] vector
 * @param {Array} [b] = [a] vector if not present uses vector [a]
 * @returns {Number} dot product of [a] and [b]
 */
export const vDot = (a, b = a) => {
  const l = a.length
  const vec = new Array(a)
  if (l !== b.length) {
    throw new Error('vectors need to be of matching lengths')
  }
  for (let i = 0; i < l; i++) {
    vec[i] = a[i] * b[i]
  }
  return vReduce((x, y) => x + y, vec)
}

/**
 * vFloor returns the largest integer less than or equal to a given number
 *
 * vFloor :: [a] -> a
 *
 * @param {Array} [a] function
 * @returns {Array} [vec] vector of with all floor values
 */
export const vFloor = function vFloor (a) {
  const l = a.length
  const vec = new Array(l)
  for (let i = 0; i < l; ++i) {
    vec[i] = Math.floor(a[i])
  }
  return vec
}

/**
 * vInterp, performs a linear interpolation between two vectors
 *
 * @param {Number} t interpolation amount between the two inputs
 * @param {Array} a the first operand
 * @param {Array} b the second operand
 * @returns {Array} out
 */
export const vInterp = _curry3(function vInterp (t, a, b) {
  const l = a.length
  const vec = new Array(l)
  for (let i = 0; i < l; ++i) {
    vec[i] = a[i] + t * (b[i] - a[i])
  }
  return vec
})

/**
 * vInverse returns vector with it's values inverted
 *
 * vInverse :: :: [a] -> [a]
 *
 * @param {Array} [a] vector
 * @returns {Array} [vec] vector with it's values inverted
 */
export const vInverse = a => {
  const l = a.length
  const vec = new Array(l)
  for (let i = 0; i < l; ++i) {
    vec[i] = 1.0 / a[i]
  }
  return vec
}

/**
 * vLength Calculates the length of a vector and returns a number by squaring a
 * dot product of the vector.
 *
 * vLength :: [a] -> num
 * vLength :: [0,3,4,5] -> 7.0710678118654755
 *
 * @param {Array} a vector
 * @returns {Number} d a number with the length of the vector
 */
export const vLength = a => {
  const d = vDot(a, a)
  return Math.sqrt(d)
}

/**
 * vMap transform each element of a vector with a given function and returns the
 * transformed values in a new vector.
 *
 * vMap :: (a -> b) -> [a] -> [b]
 *
 * @param {Function} f function
 * @param {Array} a vector
 * @returns {Array} [vec] vector
 */
export const vMap = (f, a) => {
  const l = a.length
  const vec = new Array(l)
  for (let i = 0; i < l; ++i) {
    vec[i] = f(a[i])
  }
  return vec
}

/**
 * vMax compares the
 *
 * vMax :: (a -> b) -> [a] -> [b]
 *
 * @param {Array} [a] function
 * @param {Array} [b] vector
 * @returns {Array} [vec] vector
 */
export const vMax = _curry2(function vMax (a, b) {
  const l = a.length
  const vec = new Array(l)
  for (let i = 0; i < l; ++i) {
    vec[i] = Math.max(a[i], b[i])
  }
  return vec
})

/**
 * vMin compares the vectors and returns the vector with the minimum
 * value.
 *
 * vMin :: (a -> b) -> [a] -> [b]
 *
 * @param {Array} [a] function
 * @param {Array} [b] vector
 * @returns {Array} [vec] vector
 */
export const vMin = _curry2(function vMin (a, b) {
  const l = a.length
  const vec = new Array(l)
  for (let i = 0; i < l; ++i) {
    vec[i] = Math.min(a[i], b[i])
  }
  return vec
})

/**
 * vMultiply multiplies vectors together and returns the result
 * in a single vector.
 *
 * vMultiply :: ([a], [b]) -> ([a] * [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Array} [vec] single vector with result of the multiplication.
 */
export const vMultiply = _curry2(function vMultiply (a, b) {
  const l = a.length
  const vec = []
  for (let i = 0; i < l; ++i) {
    vec[i] = a[i] * b[i]
  }
  return vec
})

/**
 * vScale scales a vectors with a given value
 *
 * vScale :: :: (a, [b]) -> ([b] * a) -> [c]
 *
 * @param {Number} a amount to scale the vector by
 * @param {Array} [b] vector
 * @returns {Array} [vec] single vector with result of the scale.
 */
export const vScale = _curry2(function vScale (a, b) {
  const l = b.length
  const vec = []
  for (let i = 0; i < l; ++i) {
    vec[i] = b[i] * a
  }
  return vec
})

/**
 * vNegate negates a vector
 *
 * vNegate :: :: [a] -> [-a]
 *
 * @param {Array} [a] vector
 * @returns {Array} [vec] vector with it's values negated
 */
export const vNegate = function vNegate (a) {
  const l = a.length
  const vec = new Array(l)
  for (let i = 0; i < l; ++i) {
    vec[i] = -a[i]
  }
  return vec
}

/**
 * Reduce returns an accumulation of a function which is called x number of times
 * where x is the length of the vector element.
 *
 * vReduce :: (a -> b -> a) -> a -> [b] -> a
 *
 * @param {Function} f function
 * @param {Array} a vector
 * @param {Number} z is the initial value
 * @returns {Number} an accumulated value
 */
export const vReduce = (f, a, z = 0) => {
  let r = z
  for (let i = 0, l = a.length; i < l; ++i) {
    r = f(r, a[i], i)
  }
  return r
}

/**
 * vRound returns the value of a number rounded to the nearest integer.
 *
 * vRound :: [a] -> [a]
 *
 * @param {Array} [a] function
 * @returns {Array} [vec] vector
 */
export const vRound = function vRound (a) {
  const l = a.length
  const vec = new Array(l)
  for (let i = 0; i < l; ++i) {
    vec[i] = Math.round(a[i])
  }
  return vec
}

/**
 * vSubtract subtracts vectors together and returns the result
 * in a single vector.
 *
 * vSubtract :: ([a], [b]) -> ([a] - [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Array} [vec] single vector with result of the subtraction.
 */
export const vSubtract = _curry2(function vSubtract (a, b) {
  const l = a.length
  const vec = []
  for (let i = 0; i < l; ++i) {
    vec[i] = a[i] - b[i]
  }
  return vec
})
