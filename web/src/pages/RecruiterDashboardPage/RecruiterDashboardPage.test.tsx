import { render } from '@redwoodjs/testing/web'

import RecruiterDashboardPage from './RecruiterDashboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RecruiterDashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecruiterDashboardPage />)
    }).not.toThrow()
  })
})
