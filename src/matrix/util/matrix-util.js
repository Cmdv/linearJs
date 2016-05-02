/** @license MIT License (c) copyright 2016 original author or authors */

export const isMatrix = mtx => Array.isArray(mtx[0][0])

export const mNumCheck = (n, m) => typeof n !== 'number' || typeof m !== 'number'
