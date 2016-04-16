/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'
import {vAdd, vAddSelf, vDot, vLength, vMap, vReduce} from '../../src/vector/vOperators'
import {compose} from '../../src/fp-helpers'

describe('@vAdd', () => {
  it('given two vectors it will add them together', () => {
    assert.deepEqual(vAdd([1, 2], [1, 2]), [2, 4])
  })
  it('given two vectors one called outside it will add them together', () => {
    assert.deepEqual(vAdd([1, 2])([1, 2]), [2, 4])
  })
  it('vAdd can be used in compose()', () => {
    const comp = compose(vDot, vAdd([1, 2]))
    assert.deepEqual(comp([4, 2]), 41)
  })
})
describe('@vAddSelf', () => {
  it('given one vector it will add it self', () => {
    assert.deepEqual(vAddSelf([1, 2]), [2, 4])
  })
  it('vAddSelf can be used in compose()', () => {
    const comp = compose(vDot, vAddSelf)
    assert.deepEqual(comp([4, 2]), 80)
  })
})
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
describe('@vReduce', () => {
  it('returns the reduced number of a vector with no initial value', () => {
    assert.strictEqual(vReduce((x, y) => x + y, [1, 2, 3]), 6)
  })
  it('returns the reduced numer of a vector with initial values', () => {
    assert.strictEqual(vReduce((x, y) => x + y, [1, 2, 3], 6), 12)
  })
})
