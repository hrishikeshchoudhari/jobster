import { render } from '@redwoodjs/testing/web'

import AllCandidatesPage from './AllCandidatesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AllCandidatesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllCandidatesPage />)
    }).not.toThrow()
  })
})
