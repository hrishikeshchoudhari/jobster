import type { FindRecruiters } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Recruiters from 'src/components/Recruiter/Recruiters'

export const QUERY = gql`
  query FindRecruiters {
    recruiters {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No recruiters yet. '}
      <Link to={routes.newRecruiter()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ recruiters }: CellSuccessProps<FindRecruiters>) => {
  return <Recruiters recruiters={recruiters} />
}
