/** @license MIT License (c) copyright 2016 original author or authors */

export const mRowLoop = (row, data) => {
  for (let i = 0; i < row.length; ++i) {
    row[i] = data
  }
  return row
}
