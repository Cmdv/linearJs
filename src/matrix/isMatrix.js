/** @license MIT License (c) copyright 2016 original author or authors */

import {isVector} from '../vector/isValid'

const matrixLength = len => len === 3 || len === 9
const isVectors = x => isVector(x)
const allVectors = v => v.every(isVectors)
const isMatrix = v => matrixLength(v.length) && allVectors(v)

export {isMatrix}
