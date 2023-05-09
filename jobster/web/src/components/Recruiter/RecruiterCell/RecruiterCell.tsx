import type { FindRecruiterById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Recruiter from 'src/components/Recruiter/Recruiter'

export const QUERY = gql`
  query FindRecruiterById($id: String!) {
    recruiter: recruiter(id: $id) {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Recruiter not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ recruiter }: CellSuccessProps<FindRecruiterById>) => {
  return <Recruiter recruiter={recruiter} />
}
