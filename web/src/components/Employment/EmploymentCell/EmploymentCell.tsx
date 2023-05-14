import type { FindEmploymentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Employment from 'src/components/Employment/Employment'

export const QUERY = gql`
  query FindEmploymentById($id: String!) {
    employment: employment(id: $id) {
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

export const Empty = () => <div>Employment not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employment,
}: CellSuccessProps<FindEmploymentById>) => {
  return <Employment employment={employment} />
}
