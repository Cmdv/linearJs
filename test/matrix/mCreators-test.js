/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'
import {mZeros, mClone, mOnes} from '../../src/matrix/index'

describe('@mClone()', () => {
  it('Generates a copy/clone of given matrix', () => {
    const mc = mClone([[1, 2, 3], [4, 5, 6]])
    assert.deepEqual(mc, ([[1, 2, 3], [4, 5, 6]]))
  })
  it('throws if argument is not a matrix', () => {
    assert.throws(() => mClone([1, 2, 3]), 'mClone() only accepts a matrix')
  })
})

describe('@vZeros()', () => {
  it('creates new matrix with zeros values', () => {
    assert.deepEqual(mZeros(2, 2), [[0, 0], [0, 0]])
  })
  it('throws if arguments are not numbers or only one value', () => {
    assert.throws(() => mZeros('a', 'b'), 'to create a vectors you must use numbers')
  })
})

describe('@vOnes()', () => {
  it('creates new matrix with values of ones', () => {
    const ones = mOnes(2, 3)
    assert.deepEqual(ones, [[1, 1, 1], [1, 1, 1]])
  })
  it('throws if arguments are not numbers or only one value', () => {
    assert.throws(() => mOnes('c', 'd'), 'to create a vectors you must use numbers')
  })
})
