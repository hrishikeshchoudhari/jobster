import type { FindEmployments, FindEmploymentsByResumeId } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Employments from 'src/components/Employment/Employments'

export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  }
}

// export const QUERY = gql`
//   query FindEmployments {
//     employments {
//       id
//       resumeId
//       employerName
//       startDate
//       endDate
//       role
//       description
//       createdAt
//       updatedAt
//     }
//   }
// `

export const QUERY = gql`
  query FindEmploymentsByResumeId($resumeId: String!) {
    employments: employmentsByResumeId(resumeId: $resumeId) {
      id
      resumeId
      employerName
      startDate
      endDate
      role
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No employment history entered yet. '}
      {/* <Link to={routes.newEmployment()} className="rw-link">
        {'Create one?'}
      </Link> */}
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employments,
}: CellSuccessProps<FindEmploymentsByResumeId>) => {
  return <Employments employments={employments} />
}
