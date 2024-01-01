import { test } from 'vitest'
import { getUniqueElements } from './get-unique-elements' // replace with your actual file path

test('getUniqueElements', () => {
  const array1 = [1, 2, 3, 4, 5]
  const array2 = [3, 4, 5, 6, 7]
  const expectedArray = [1, 2, 3, 4, 5, 6, 7]

  const result = getUniqueElements(array1, array2)

  // Check if the array is modified as expected
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== expectedArray[i]) {
      throw new Error(`Test failed: Expected ${expectedArray[i]} but got ${result[i]} at index ${i}`)
    }
  }
})
