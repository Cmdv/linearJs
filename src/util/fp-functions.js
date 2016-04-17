/** @license MIT License (c) copyright 2016 original author or authors
 *  @author Vincent Orr */

// id :: a -> a
// export const id = x => x

// apply :: (a -> b) -> a -> b
// export const apply = (f, x) => f(x)

// compose :: (b -> c) -> (a -> b) -> (a -> c)
export const compose = (f, g) => {
  if (!f && !g) {
    throw new Error('compose requires at least one argument')
  }
  return x => f(g(x))
}

// curry2 :: ((a, b) -> c) -> (a -> b -> c)
export function _curry2 (f) {
  function curried (a, b) {
    switch (arguments.length) {
      case 0:
        return curried
      case 1:
        return b => f(a, b)
      default:
        return f(a, b)
    }
  }
  return curried
}

// curry3 :: ((a, b, c) -> d) -> (a -> b -> c -> d)
export function _curry3 (f) {
  function curried (a, b, c) { // eslint-disable-line complexity
    switch (arguments.length) {
      case 0: return curried
      case 1: return _curry2((b, c) => f(a, b, c))
      case 2: return c => f(a, b, c)
      default:return f(a, b, c)
    }
  }
  return curried
}
