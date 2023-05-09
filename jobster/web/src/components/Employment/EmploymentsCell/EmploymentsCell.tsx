import type { FindEmployments } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Employments from 'src/components/Employment/Employments'

export const QUERY = gql`
  query FindEmployments {
    employments {
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
      {'No employments yet. '}
      <Link to={routes.newEmployment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ employments }: CellSuccessProps<FindEmployments>) => {
  return <Employments employments={employments} />
}
