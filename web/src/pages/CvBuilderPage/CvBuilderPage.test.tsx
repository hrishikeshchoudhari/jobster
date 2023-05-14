import { render } from '@redwoodjs/testing/web'

import CvBuilderPage from './CvBuilderPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CvBuilderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CvBuilderPage />)
    }).not.toThrow()
  })
})
