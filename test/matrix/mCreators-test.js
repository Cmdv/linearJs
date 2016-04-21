/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'
import {mZeros} from '../../src/matrix/index'

describe('@vZeros()', () => {
  it('creates new matrix with zeros values', () => {
    assert.deepEqual(mZeros(2, 2), [[0, 0], [0, 0]])
  })

  it('throws if arguments are not numbers or only one value', () => {
    assert.throws(() => mZeros('a', 'b'), 'mZeros expects 2 arguments and for them to be numbers')
    assert.throws(() => mZeros(2), 'mZeros expects 2 arguments and for them to be numbers')
  })
})
