import type { EditEmploymentById, UpdateEmploymentInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmploymentForm from 'src/components/Employment/EmploymentForm'

export const QUERY = gql`
  query EditEmploymentById($id: String!) {
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
const UPDATE_EMPLOYMENT_MUTATION = gql`
  mutation UpdateEmploymentMutation(
    $id: String!
    $input: UpdateEmploymentInput!
  ) {
    updateEmployment(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  employment,
}: CellSuccessProps<EditEmploymentById>) => {
  const [updateEmployment, { loading, error }] = useMutation(
    UPDATE_EMPLOYMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Employment updated')
        navigate(routes.employments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEmploymentInput,
    id: EditEmploymentById['employment']['id']
  ) => {
    updateEmployment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Employment {employment?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmploymentForm
          employment={employment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
