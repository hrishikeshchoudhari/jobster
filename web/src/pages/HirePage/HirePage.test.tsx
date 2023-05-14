import { render } from '@redwoodjs/testing/web'

import HirePage from './HirePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HirePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HirePage />)
    }).not.toThrow()
  })
})
