/** @license MIT License (c) copyright 2016 original author or authors */

// vDot :: [a] -> [a]
// vDot :: [2,2] -> [4,4]
// iterating twice feels kind of wrong
export function vDot (v1, v2) {
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

// vLength :: [a] -> num
// vLength :: [0,3,4,5] -> 7.0710678118654755
export function vLength (vector) {
  const d = vDot(vector, vector)
  return Math.sqrt(d)
}

// map :: (a -> b) -> [a] -> [b]
// transform each element with f
export function vMap (f, a) {
  const l = a.length
  const b = new Array(l)
  for (let i = 0; i < l; ++i) {
    b[i] = f(a[i])
  }
  return b
}

// reduce :: (a -> b -> a) -> a -> [b] -> a
// accumulate via left-fold
export function vReduce (f, z, a) {
  let r = z
  for (let i = 0, l = a.length; i < l; ++i) {
    r = f(r, a[i], i)
  }
  return r
}
