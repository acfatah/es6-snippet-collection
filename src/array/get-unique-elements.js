/**
 * Returns an array containing unique elements from the input arrays.
 * @param {...Array} arr - The input arrays.
 * @returns {Array} - The array containing unique elements.
 */
export const getUniqueElements = (...arr) => {
  // Concatenate all input arrays into a single array
  const concatenatedArr = [].concat(...arr)

  // Create a Set from the concatenated array to remove duplicates
  const uniqueSet = new Set(concatenatedArr)

  // Convert the Set back to an array
  const uniqueArr = [...uniqueSet]

  return uniqueArr
}

// One liner: (...arr) => [...new Set([].concat(...arr))]
