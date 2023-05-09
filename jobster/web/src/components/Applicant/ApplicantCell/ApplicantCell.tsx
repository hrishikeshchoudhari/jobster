import type { FindApplicantById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Applicant from 'src/components/Applicant/Applicant'

export const QUERY = gql`
  query FindApplicantById($id: String!) {
    applicant: applicant(id: $id) {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Applicant not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ applicant }: CellSuccessProps<FindApplicantById>) => {
  return <Applicant applicant={applicant} />
}
