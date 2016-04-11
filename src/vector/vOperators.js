/** @license MIT License (c) copyright 2016 original author or authors */

/**
 * vAdd adds 2 vectors or it self if given only one vector
 *
 * vMap :: ([a] -> [b]) -> [c]
 *
 * @param {Array} a vector
 * @param {Array} b vector
 * @returns {Array} c vector
 */
export function vAdd (a, b = a) {
  const l = a.length
  const out = []
  for (let i = 0; i < l; ++i) {
    out[i] = a[i] + b[i]
  }
  return out
}

/**
 * vDot Calculates the length of a vector
 *
 * vDot :: [a] -> [a]
 * vDot :: [2,2] -> [4,4]
 *
 * @param {Array} v1 vector
 * @param {Array} v2 vector if not present uses v1
 * @returns {Number} dot product of v1 and v2
 */
export function vDot (v1, v2 = v1) {
  const l = v2.length
  const b = new Array(v1)
  if (l !== v2.length) {
    return null
  }
  for (let i = 0; i < l; i++) {
    b[i] = v1[i] * v2[i]
  }
  return vReduce((x, y) => x + y, null, b)
}

/**
 * vLength Calculates the length of a vector
 *
 * vLength :: [a] -> num
 * vLength :: [0,3,4,5] -> 7.0710678118654755
 *
 * @param {Array} a vector
 * @returns {Number} d a number with the length of the vector
 */
export function vLength (a) {
  const d = vDot(a, a)
  return Math.sqrt(d)
}

/**
 * vMap transform each element of a vector with a given function
 *
 * vMap :: (a -> b) -> [a] -> [b]
 *
 * @param {Function} f function
 * @param {Array} a vector
 * @returns {Array} b vector
 */
export function vMap (f, a) {
  const l = a.length
  const b = new Array(l)
  for (let i = 0; i < l; ++i) {
    b[i] = f(a[i])
  }
  return b
}

// TODO: Sort out reduce null value
/**
 * Reduce returns an accumulation of a function which is called x number of times
 * where x is the length of the vector element.
 *
 * vReduce :: (a -> b -> a) -> a -> [b] -> a
 *
 * @param {Function} f function
 * @param {Number} z need to sort out
 * @param {Array} a vector
 * @returns {Number} an accumulated value
 */
export function vReduce (f, z, a) {
  let r = z
  for (let i = 0, l = a.length; i < l; ++i) {
    r = f(r, a[i], i)
  }
  return r
}
