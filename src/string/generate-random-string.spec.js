import { generateRandomString } from './generate-random-string'
import { test } from 'vitest'

test('generateRandomString generates a string of correct length', () => {
  const length = 10
  const str = generateRandomString(length)

  if (str.length !== length) {
    throw new Error(`Expected length ${length}, but got ${str.length}`)
  }
})

test('generateRandomString generates a string with correct characters', () => {
  const length = 10
  const characters = 'abc'
  const str = generateRandomString(length, { characters })

  for (let i = 0; i < str.length; i++) {
    if (!characters.includes(str[i])) {
      throw new Error(`Unexpected character ${str[i]}`)
    }
  }
})
