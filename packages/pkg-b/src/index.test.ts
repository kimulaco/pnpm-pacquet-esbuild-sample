import { expect, it } from 'vitest'
import { multiply } from './index'

it('multiplies', () => {
  expect(multiply(2, 3)).toBe(6)
})
