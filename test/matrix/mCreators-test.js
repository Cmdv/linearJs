/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'
import {mZeros, mClone, mOnes, mIdentity} from '../../src/matrix/index'

// const roundCheck = (x, y = 1) => x >= -y && x <= y + y

describe('@mClone()', () => {
  it('Generates a copy/clone of given matrix', () => {
    const mc = mClone([[1, 2, 3], [4, 5, 6]])
    assert.deepEqual(mc, ([[1, 2, 3], [4, 5, 6]]))
  })
  it('throws if argument is not a matrix', () => {
    assert.throws(() => mClone([1, 2, 3]), 'mClone() only accepts a matrix')
  })
})

// TODO: once mlength is done for matrices then make these tests.
// describe('@mRandom()', () => {
//   it('creates random vector values given number', () => {
//     const ran = mRandom(1, 4)
//     const result = roundCheck(Math.round(vLength(ran)))
//     assert.equal(result, true)
//     assert.deepEqual(ran.length, 4)
//   })
//   it('creates random vector using the given scale', () => {
//     const scale = 5
//     const ran = mRandom(scale, 4)
//     const result = roundCheck(Math.round(vLength(ran)), scale)
//     assert.equal(result, true)
//   })
//   it('throws if value is not numerical', () => {
//     assert.throws(() => mRandom(['a']), 'value should be a number to create a random vector')
//   })
// })
describe('@mIdentity()', () => {
  it('creates new matrix with zeros values', () => {
    assert.deepEqual(mIdentity(2), [[1, 0], [0, 1]])
  })
  it('creates new matrix with zeros values', () => {
    assert.deepEqual(mIdentity(3), [[1, 0, 0], [0, 1, 0], [0, 0, 1]])
  })
  it('throws if the argument is not a number', () => {
    assert.throws(() => mIdentity('a'), 'to create an identity matrix you must use a number')
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
