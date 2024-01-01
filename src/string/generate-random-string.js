/**
 * Generates a random string of specified length.
 *
 * @param {number} length - The length of the generated string. Defaults to 32.
 * @param {Object} options - Additional options for generating the string.
 * @param {string} options.characters - The set of characters to use for generating the string. Defaults to 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.
 * @param {string} options.symbols - The set of symbols to include in the character set. Defaults to '-_'.
 * @param {boolean} options.includeSymbols - Whether to include symbols in the character set. Defaults to false.
 * @returns {string} The generated random string.
 */
export const generateRandomString = (
  length = 32,
  {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    symbols = '-_',
    includeSymbols = false
  } = {}
) => {
  let result = ''

  // Combine characters and symbols if includeSymbols is true
  const characterSet = includeSymbols ? characters + symbols : characters

  while (length--) {
    const pos = Math.floor(Math.random() * characterSet.length)

    result += characterSet.charAt(pos)
  }

  return result
}
