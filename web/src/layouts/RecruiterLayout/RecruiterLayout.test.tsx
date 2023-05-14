import { render } from '@redwoodjs/testing/web'

import RecruiterLayout from './RecruiterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RecruiterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecruiterLayout />)
    }).not.toThrow()
  })
})
