import { describe, it, expect } from 'vitest'
import { example } from './example'

describe('example', () => {
  it('should return true', () => {
    expect(example()).toBe(true)
  })
})
