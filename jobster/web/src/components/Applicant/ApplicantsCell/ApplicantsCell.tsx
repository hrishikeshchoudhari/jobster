import type { FindApplicants } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Applicants from 'src/components/Applicant/Applicants'

export const QUERY = gql`
  query FindApplicants {
    applicants {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No applicants yet. '}
      <Link to={routes.newApplicant()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ applicants }: CellSuccessProps<FindApplicants>) => {
  return <Applicants applicants={applicants} />
}
