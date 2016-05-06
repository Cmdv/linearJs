/** @license MIT License (c) copyright 2016 original author or authors */
import {describe, it} from 'mocha'
import assert from 'assert'
// import {_compose} from '../../src/util/fp-functions'

import {mAdd, mAddSelf, mDivide, mMultiply, mSubtract} from '../../src/matrix/mOperators'

// mAdd, vDivide, vMultiply, vSubtract'
describe('@mAdd, @vDivide, @vMultiply, @vSubtract', () => {
  it('given two matrices it will operate them together', () => {
    const add = mAdd([[1, 2], [1, 2]], [[1, 2], [1, 2]])
    const div = mDivide([[4, 4], [4, 4]], [[2, 2], [2, 2]])
    const mult = mMultiply([[2, 4], [2, 4]], [[2, 4], [2, 4]])

    assert.deepEqual(add, [[2, 4], [2, 4]], 'addition')
    assert.deepEqual(div, [[2, 2], [2, 2]], 'division')
    assert.deepEqual(mult, [[4, 16], [4, 16]], 'multiplication')
    assert.deepEqual(mSubtract([[7, 7], [4, 4]], [[1, 1], [1, 1]]),
      [[6, 6], [3, 3]], 'subtraction')
  })
  it('given two matrices one called outside it will operate them together', () => {
    const add = mAdd([[1, 2], [1, 2]])([[1, 2], [1, 2]])
    const div = mDivide([[4, 4], [4, 4]])([[2, 2], [2, 2]])
    const mult = mMultiply([[2, 4], [2, 4]])([[2, 4], [2, 4]])

    assert.deepEqual(add, [[2, 4], [2, 4]], 'addition')
    assert.deepEqual(div, [[2, 2], [2, 2]], 'division')
    assert.deepEqual(mSubtract([[7, 7], [4, 4]])([[1, 1],
    [1, 1]]), [[6, 6], [3, 3]], 'subtraction')
    assert.deepEqual(mult, [[4, 16], [4, 16]], 'multiplication')
  })
  // TODO: once dot is added then do these
  it('operators can be used with compose() and are curried', () => {
    // const addComp = _compose(vDot, mAdd([[1, 2], [1, 2]]))
    // const divComp = _compose(vDot, vDivide([4, 4]))
    // const subComp = _compose(vDot, mSubtract([5, 6]))
    // const multComp = _compose(vDot, mMultiply([2, 2]))
    //
    // assert.deepEqual(addComp([[1, 2], [1, 2]]), [5, 4], 'addition')
    // assert.deepEqual(divComp([2, 2]), 8, 'division')
    // assert.deepEqual(subComp([3, 4]), 8, 'subtraction')
    // assert.deepEqual(multComp([2, 2]), 32, 'multiplication')
  })
})

// mAddSelf
describe('@mAddSelf', () => {
  it('given one matrix it will add it self', () => {
    assert.deepEqual(mAddSelf([[1, 2], [1, 2]]), [[2, 4], [2, 4]])
  })
  it('mAddSelf can be used in _compose()', () => {
    // const comp = _compose(vDot, mAddSelf)
    // assert.deepEqual(comp([4, 2]), 80)
  })
})
