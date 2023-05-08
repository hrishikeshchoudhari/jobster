import { render } from '@redwoodjs/testing/web'

import ApplicantDashboardPage from './ApplicantDashboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ApplicantDashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ApplicantDashboardPage />)
    }).not.toThrow()
  })
})
