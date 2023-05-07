import { render } from '@redwoodjs/testing/web'

import JobsterLayout from './JobsterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JobsterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobsterLayout />)
    }).not.toThrow()
  })
})
