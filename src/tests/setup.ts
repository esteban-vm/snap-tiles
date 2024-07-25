import '@testing-library/jest-dom'
import '@testing-library/jest-dom/vitest'
import { configure, cleanup } from '@testing-library/react'

beforeAll(() => {
  configure({ throwSuggestions: true })
})

afterEach(cleanup)
