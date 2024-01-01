/**
 * Moves an element within an array from one index to another.
 * @param {Array} array - The array to modify.
 * @param {number} fromIndex - The index of the element to move.
 * @param {number} toIndex - The index to move the element to.
 * @returns {Array} - The modified array.
 */
export const moveElement = (array, fromIndex, toIndex) => {
  // Store the element to move
  const elementToMove = array[fromIndex]

  // Remove the element from the original index
  array.splice(fromIndex, 1)

  // Insert the element at the new index
  array.splice(toIndex, 0, elementToMove)

  // Return the modified array
  return array
}

// Or one liner version: (array, from, to) => array.splice(to, 0, array.splice(from, 1)[0])
