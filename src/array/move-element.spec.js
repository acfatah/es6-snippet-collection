import { test } from 'vitest'
import { moveElement } from './move-element'

test('moveElement', () => {
  const array = [1, 2, 3, 4, 5]
  const fromIndex = 1
  const toIndex = 3
  const expectedArray = [1, 3, 4, 2, 5]

  const result = moveElement(array, fromIndex, toIndex)

  // Check if the array is modified as expected
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== expectedArray[i]) {
      throw new Error(`Test failed: Expected ${expectedArray[i]} but got ${result[i]} at index ${i}`)
    }
  }
})
