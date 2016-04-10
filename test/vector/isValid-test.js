/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'

import {isValidNumbers, isValidVector} from '../../src/vector/isValid'

describe('@isValid', () => {
  describe('@isValidNumbers()', () => {
    it('throws if empty', () => {
      assert.throws(() => {
        isValidNumbers()
      }, /A value is needed for a vector/)
    })
    it('throws if all element of vector are not numbers', () => {
      assert.throws(() => {
        isValidNumbers([1, 2, 'a'])
      }, /A vector can only be of numerical values/)
    })
  })
  describe('@isValidVector()', () => {
    it('throws if vector argument is matrix', () => {
      assert.throws(() => {
        isValidVector([[1, 2], [1, 2], [1, 2]])
      }, /A valid vector must be passed to this function/)
    })
    it('throws if too many vector arguments', () => {
      assert.throws(() => {
        isValidVector([1, 2], [1, 2])
      }, /A valid vector must be passed to this function/)
    })
    it('throws if vector arguments are not numbers', () => {
      assert.throws(() => {
        isValidVector('vector')
      }, /A valid vector must be passed to this function/)
      assert.throws(() => {
        isValidVector(['a', 'b'])
      }, /A vector can only be of numerical values/)
    })
    it('returns true if given a vector and all elements are numbers', () => {
      assert.strictEqual(isValidVector([1, 2, 3]), true)
    })
  })
})
