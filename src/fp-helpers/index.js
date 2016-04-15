/** @license MIT License (c) copyright 2016 original author or authors
 *  @author Vincent Orr */

// id :: a -> a
export const id = x => x

// compose :: (b -> c) -> (a -> b) -> (a -> c)
export const compose = (f, g) => {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument')
  }
  return x => f(g(x))
}

// apply :: (a -> b) -> a -> b
export const apply = (f, x) => f(x)

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
