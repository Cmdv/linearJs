/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'
import {vDot, vLength, vMap, vReduce} from '../../src/vector/vOperators'

describe('@vDot', () => {
  it('given two vectors it will dot product them', () => {
    assert.strictEqual(vDot([1, 2], [1, 2]), 5)
  })
  it('given one vectors it will dot product it self', () => {
    assert.strictEqual(vDot([1, 2]), 5)
  })
})
describe('@vLength', () => {
  it('creates vector given numbers', () => {
    const len = vLength([1, 2])
    assert.deepEqual(Math.round(len), 2)
  })
})
describe('@vMap', () => {
  it('maps over a vector', () => {
    assert.deepEqual(vMap(x => x + x, [1, 2, 3]), [2, 4, 6])
  })
})
// TODO: Sort out reduce null value
describe('@vReduce', () => {
  it('creates vector given numbers', () => {
    assert.strictEqual(vReduce((x, y) => x + y, null, [1, 2, 3]), 6)
  })
})
