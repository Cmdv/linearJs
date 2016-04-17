/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'
import {compose} from '../../src/util/fp-functions'
import {
  vAdd, vAddSelf, vCeil, vDot, vLength, vMap, vReduce,
  vSubtract, vDivide, vMultiply, vMax, vMin,
  vFloor, vRound, vScale, vDistance, vDistanceSq
} from '../../src/vector/vOperators'

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

// vCeil
describe('@vCeil', () => {
  it('given a vector it will ceil it\'s values', () => {
    const ceil = vCeil([2.42, 4.26])
    assert.deepEqual(ceil, [3, 5])
  })
})

// vDistance, vDistanceSq
describe('@vDistance, vDistanceSq', () => {
  it('returns a number for distance', () => {
    const distance = vDistance([4, 5], [2, 4])
    const distanceSq = vDistanceSq([4, 5], [2, 4])
    assert.deepEqual(distance, 2.23606797749979, 'distance')
    assert.deepEqual(distanceSq, 5, 'distanceSq')
  })
  it('works when curried', () => {
    const dist = vDistance([4, 5])([2, 4])
    const distSq = vDistanceSq([4, 5])([2, 4])
    assert.deepEqual(dist, 2.23606797749979)
    assert.deepEqual(distSq, 5)
  })
  it('works when used with compose', () => {
    const compDiss = compose(Math.round, vDistance([4, 5]))
    const compDissSq = compose(Math.round, vDistanceSq([4, 5]))
    assert.deepEqual(compDiss([2, 4]), 2)
    assert.deepEqual(compDissSq([2, 4]), 5)
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

// vFloor
describe('@vFloor', () => {
  it('given one vector it will add it self', () => {
    const floor = vFloor([1.42, 2.26])
    assert.deepEqual(floor, [1, 2])
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

// vMax, vMin
describe('@vMax, @vMin', () => {
  it('returns the vector with the max value', () => {
    const max = vMax([1, 2, 3], [4, 5, 6])
    const min = vMin([1, 2, 3], [4, 5, 6])
    assert.deepEqual(max, [4, 5, 6])
    assert.deepEqual(min, [1, 2, 3])
  })
  it('it is curried', () => {
    const max = vMax([1, 2, 3])([4, 5, 6])
    const min = vMin([1, 2, 3])([4, 5, 6])
    assert.deepEqual(max, [4, 5, 6])
    assert.deepEqual(min, [1, 2, 3])
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

// vRound
describe('@vRound', () => {
  it('given a vector it will round it\'s values', () => {
    const round = vRound([6.62, 4.05])
    assert.deepEqual(round, [7, 4])
  })
})

// vScale
describe('@vScale', () => {
  it('returns a vector with values scaled', () => {
    const scale = vScale(2, [2, 4])
    assert.deepEqual(scale, [4, 8])
  })
  it('works when curried', () => {
    const curryScale = vScale(2)([2, 4])
    assert.deepEqual(curryScale, [4, 8])
  })
  it('works when used with compose', () => {
    const compFloor = compose(vAddSelf, vScale(2))
    const result = compFloor([2, 4])
    assert.deepEqual(result, [8, 16])
  })
})
