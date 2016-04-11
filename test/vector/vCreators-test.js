/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'
import {vCreate, vClone, vRandom, vLength, vZeros} from '../../src/vector/index'

const roundCheck = (x, y = 1) => x >= -y && x <= y + y

describe('@vCreate()', () => {
  it('creates vector given numbers', () => {
    assert.deepEqual(vCreate(1, 2), [1, 2])
  })
  it('creates vector given array', () => {
    assert.deepEqual(vCreate([1, 2]), [1, 2])
  })
  it('throws if value of vCreate is not numerical', () => {
    assert.throws(() => vCreate(['a']), 'vCreate value should only be a ' +
      'number or an vector with numbers')
    assert.throws(() => vCreate('a'), 'vCreate value should only be a ' +
      'number or an vector with numbers')
  })
})
describe('@vClone()', () => {
  it('when given a vector it returns a new vector', () => {
    assert.deepEqual(vClone([1, 2, 3]), [1, 2, 3])
  })
  it('throws if value of vClone is not numerical', () => {
    assert.throws(() => vClone(['a']), 'vClone needs a valid vector ' +
      'with numbers only and not a matrix')
  })
})
describe('@vRandom()', () => {
  it('creates random vector values given array', () => {
    const ran = vRandom([0, 0, 0, 0])
    const result = roundCheck(Math.round(vLength(ran)))
    assert.equal(result, true)
    assert.deepEqual(ran.length, 4)
  })
  it('creates random vector with length of given numbers', () => {
    const ran = vRandom(4)
    const result = roundCheck(Math.round(vLength(ran)))
    assert.equal(result, true)
    assert.deepEqual(ran.length, 4)
  })
  it('creates random vector using the given scale', () => {
    const scale = 5
    const ran = vRandom(4, scale)
    const result = roundCheck(Math.round(vLength(ran)), scale)
    assert.equal(result, true)
  })
  it('throws if value is not numerical', () => {
    assert.throws(() => vRandom(['a']), 'vRandom accepts a valid vector or a number')
  })
})
describe('@vZeros()', () => {
  it('creates new vector with zeros values', () => {
    assert.deepEqual(vZeros(5), [0, 0, 0, 0, 0])
  })

  it('throws if given a non numerical value', () => {
    assert.throws(() => vZeros([1, 2]), 'vZeros only accepts a number value')
  })
})
