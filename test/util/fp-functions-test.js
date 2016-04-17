/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'

import {compose, _curry2} from '../../src/util/fp-functions'

describe('@fp-helpers', () => {
  describe('compose', () => {
    it('compose(f, g)(x) === f(g(x))', () => {
      const fx = '' + Math.random()
      const gx = '' + Math.random()
      const x = '' + Math.random()

      const f = x => x + fx
      const g = x => x + gx
      const h = compose(f, g)

      assert.strictEqual(f(g(x)), h(x))
    })
    it('throws given no values', () => {
      assert.throws(() => compose(), 'compose requires at least one argument')
    })
  })
  describe('_curry2', () => {
    it('should return the original function if no args are given', () => {
      const fn = (a, b) => a + b
      const curriedFn = _curry2(fn)
      assert.strictEqual(curriedFn().length, 2)
    })

    it('should return a function of length 1 when 1 arg is given', () => {
      const fn = (a, b) => a + b
      const curriedFn = _curry2(fn)
      assert.strictEqual(curriedFn(1).length, 1)
    })

    it('should execute function when given 2 args', () => {
      const fn = (a, b) => a + b
      const curriedFn = _curry2(fn)
      assert.strictEqual(typeof curriedFn(1, 2).length, 'undefined')
      assert.strictEqual(curriedFn(1, 2), 3)
    })

    it('should be invariant', () => {
      const f = (x, y) => x + y
      const a = 1
      const b = 2

      const expected = f(a, b)

      assert.strictEqual(expected, _curry2(f)(a)(b))
      assert.strictEqual(expected, _curry2(f)(a, b))
    })
  })
})
