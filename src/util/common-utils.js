/** @license MIT License (c) copyright 2016 original author or authors */
/** @author Vincent Orr */

export const random = (i, scale) => i % 2 === 0
  ? Math.cos(Math.random() * scale * Math.PI)
  : Math.sin(Math.random() * scale * Math.PI)
