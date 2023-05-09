import { render } from '@redwoodjs/testing/web'

import InternalLayout from './InternalLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InternalLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InternalLayout />)
    }).not.toThrow()
  })
})
