/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'

import {isValidNumbers, isValidVector} from '../../../src/vector/util/vector-utils'

describe('@isValidNumbers()', () => {
  it('false if empty', () => {
    assert.strictEqual(isValidNumbers(), false)
  })
  it('false if all element of vector are not numbers', () => {
    assert.strictEqual(
      isValidNumbers([1, 2, 'a']), false)
  })
})
describe('@isValidVector()', () => {
  it('throws if vector argument is matrix', () => {
    assert.strictEqual(
      isValidVector([[1, 2], [1, 2], [1, 2]]), false)
  })
  it('throws if too many vector arguments', () => {
    assert.strictEqual(
      isValidVector([1, 2], [1, 2]), false)
  })
  it('throws if vector arguments are not numbers', () => {
    assert.strictEqual(
      isValidVector('vector'), false)
    assert.strictEqual(
      isValidVector(['a', 'b']), false)
  })
  it('returns true if given a vector and all elements are numbers', () => {
    assert.strictEqual(isValidVector([1, 2, 3]), true)
  })
})
