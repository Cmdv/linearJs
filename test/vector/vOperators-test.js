/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'
import {vAdd, vAddSelf, vDot, vLength, vMap, vReduce, vSubtract, vDivide, vMultiply} from '../../src/vector/vOperators'
import {compose} from '../../src/fp-helpers'

// vAdd, vDivide, vMultiply, vSubtract'
describe('@vAdd, @vDivide, @vMultiply, @vSubtract', () => {
  it('given two vectors it will operate them together', () => {
    const add = vAdd([1, 2], [1, 2])
    const div = vDivide([4, 4], [2, 2])
    const sub = vSubtract([5, 6], [3, 4])
    const mult = vMultiply([2, 4], [2, 4])

    assert.deepEqual(add, [2, 4], 'addition')
    assert.deepEqual(div, [2, 2], 'division')
    assert.deepEqual(sub, [2, 2], 'subtraction')
    assert.deepEqual(mult, [4, 16], 'multiplication')
  })
  it('given two vectors one called outside it will operate them together', () => {
    const add = vAdd([1, 2])([1, 2])
    const div = vDivide([4, 4])([2, 2])
    const sub = vSubtract([5, 6])([3, 4])
    const mult = vMultiply([2, 4])([2, 4])

    assert.deepEqual(add, [2, 4], 'addition')
    assert.deepEqual(div, [2, 2], 'division')
    assert.deepEqual(sub, [2, 2], 'subtraction')
    assert.deepEqual(mult, [4, 16], 'multiplication')
  })
  it('operators can be used with compose() and are curried', () => {
    const addComp = compose(vDot, vAdd([1, 2]))
    const divComp = compose(vDot, vDivide([4, 4]))
    const subComp = compose(vDot, vSubtract([5, 6]))
    const multComp = compose(vDot, vMultiply([2, 2]))

    assert.deepEqual(addComp([4, 2]), 41, 'addition')
    assert.deepEqual(divComp([2, 2]), 8, 'division')
    assert.deepEqual(subComp([3, 4]), 8, 'subtraction')
    assert.deepEqual(multComp([2, 2]), 32, 'multiplication')
  })
})

// vAddSelf
describe('@vAddSelf', () => {
  it('given one vector it will add it self', () => {
    assert.deepEqual(vAddSelf([1, 2]), [2, 4])
  })
  it('vAddSelf can be used in compose()', () => {
    const comp = compose(vDot, vAddSelf)
    assert.deepEqual(comp([4, 2]), 80)
  })
})

// vDot
describe('@vDot', () => {
  it('given two vectors it will dot product them', () => {
    assert.strictEqual(vDot([1, 2], [1, 2]), 5)
  })
  it('given one vectors it will dot product it self', () => {
    assert.strictEqual(vDot([1, 2]), 5)
  })
  it('throws if vectors are not the same length', () => {
    assert.throws(() => vDot([1, 2], [1, 2, 3]), 'vectors need to be of matching lengths')
  })
})

// vLength
describe('@vLength', () => {
  it('creates vector given numbers', () => {
    const len = vLength([1, 2])
    assert.deepEqual(Math.round(len), 2)
  })
})

// vMap
describe('@vMap', () => {
  it('maps over a vector', () => {
    assert.deepEqual(vMap(x => x + x, [1, 2, 3]), [2, 4, 6])
  })
})

// vReduce
describe('@vReduce', () => {
  it('returns the reduced number of a vector with no initial value', () => {
    assert.strictEqual(vReduce((x, y) => x + y, [1, 2, 3]), 6)
  })
  it('returns the reduced numer of a vector with initial values', () => {
    assert.strictEqual(vReduce((x, y) => x + y, [1, 2, 3], 6), 12)
  })
})
