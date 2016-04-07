/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'
import {vCreate, vRandom, vLength} from '../../src/vector/index'
// TODO: Write more tests for vZero vCopy

describe('@vCreators', () => {
  describe('@vCreate', () => {
    it('throws if given a single number', () => {
      assert.throws(() => vCreate(4), 'A vector can only be a array with ' +
        'more than 2 values `[1, 2]`, it cannot be: a single number `1`, ' +
        'nested arrays, or a matrix')
    })
    it('creates vector given more than 2 numbers', () => {
      assert.deepEqual(vCreate(1, 2), [1, 2])
    })
    it('creates vector given array', () => {
      assert.deepEqual(vCreate([1, 2]), [1, 2])
    })
    it('throws if value is not numerical', () => {
      assert.throws(() => vCreate(['a']), 'A vector can only be of numerical values')
      assert.throws(() => vCreate('a'), 'A vector can only be of numerical values')
    })
  })
  describe('@vCopy', () => {
    it('still to do', () => {
      assert.deepEqual(true, true)
    })
  })

  describe('@vRandom', () => {
    it('creates random vector values given array', () => {
      const rand = vRandom([0, 0, 0, 0])
      const roundLength = Math.round(vLength(rand))
      const result = roundLength >= 0 && roundLength <= 1
      assert.equal(result, true) // close to 1
    })
    it('creates vector with length of given numbers', () => {
      const ran = vRandom(4)
      assert.deepEqual(ran.length, 4)
    })
  })
})
