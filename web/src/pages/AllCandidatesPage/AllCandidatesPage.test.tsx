// Given
//    an application loaded with a list of applicants
// When
//    the user enters a skill in the filter input
// Then
//    the system should display only the applicants who have that skill

import {
  render,
  screen,
  fireEvent,
  MockProviders,
} from '@redwoodjs/testing/web'
import '@testing-library/jest-dom/extend-expect'

import AllCandidatesPage from './AllCandidatesPage'

describe('AllCandidatesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllCandidatesPage />)
    }).not.toThrow()
  })
})

const yourMockData = {
  getApplicantsWithDetail: [
    {
      __typename: 'User',
      id: 'clhe8t5mx00007aat7eppppda',
      email: 'qp@qp.com',
      role: 'APPLICANT',
      Applicant: {
        __typename: 'Applicant',
        Resume: {
          __typename: 'Resume',
          id: 'clhl09sr700097avw3fcu46o2',
          educations: [
            {
              __typename: 'Education',
              id: 'clhl0rcqi000f7avwq72wnp8e',
              instituteName: 'asd',
              startYear: 123000,
              endYear: 1232,
              topic: 'asd',
              level: 'SCHOOL',
            },
          ],
          employments: [],
        },
      },
    },
    {
      __typename: 'User',
      id: 'clhe8t5mx00007aat7eppppda',
      email: 'qp@qp.com',
      role: 'APPLICANT',
      Applicant: {
        __typename: 'Applicant',
        Resume: {
          __typename: 'Resume',
          id: 'clhl09sr700097avw3fcu46o2',
          educations: [
            {
              __typename: 'Education',
              id: 'clhl0rcqi000f7avwq72wnp8e',
              instituteName: 'asd',
              startYear: 123000,
              endYear: 1232,
              topic: 'asd',
              level: 'SCHOOL',
            },
          ],
          employments: [],
        },
      },
    },
    {
      __typename: 'User',
      id: 'clhe8t5mx00007aat7eppppda',
      email: 'qp@qp.com',
      role: 'APPLICANT',
      Applicant: {
        __typename: 'Applicant',
        Resume: {
          __typename: 'Resume',
          id: 'clhl09sr700097avw3fcu46o2',
          educations: [
            {
              __typename: 'Education',
              id: 'clhl0rcqi000f7avwq72wnp8e',
              instituteName: 'asd',
              startYear: 123000,
              endYear: 1232,
              topic: 'asd',
              level: 'SCHOOL',
            },
          ],
          employments: [],
        },
      },
    },
  ],
}

const mocks = [
  {
    request: {
      query: GET_APPLICANTS_WITH_DETAIL,
    },
    result: {
      data: yourMockData,
    },
  },
]

describe('Applicants Filter', () => {
  it('filters applicants based on the skill', async () => {
    // Arrange
    render(
      <MockProviders mocks={mocks} addTypename={false}>
        <AllCandidatesPage />
      </MockProviders>
    )
    const filterInput = screen.getByPlaceholderText('Filter by skill')

    // Act
    fireEvent.change(filterInput, { target: { value: 'Javascript' } })

    // Assert
    const filteredApplicants = yourMockData.filter((applicant) =>
      applicant.skills.includes('Javascript')
    )
    for (const applicant of filteredApplicants) {
      expect(screen.getByText(applicant.name)).toBeInTheDocument()
    }
  })
})
