import type { EditApplicantById, UpdateApplicantInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ApplicantForm from 'src/components/Applicant/ApplicantForm'

export const QUERY = gql`
  query EditApplicantById($id: String!) {
    applicant: applicant(id: $id) {
      id
      userId
    }
  }
`
const UPDATE_APPLICANT_MUTATION = gql`
  mutation UpdateApplicantMutation(
    $id: String!
    $input: UpdateApplicantInput!
  ) {
    updateApplicant(id: $id, input: $input) {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ applicant }: CellSuccessProps<EditApplicantById>) => {
  const [updateApplicant, { loading, error }] = useMutation(
    UPDATE_APPLICANT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Applicant updated')
        navigate(routes.applicants())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateApplicantInput,
    id: EditApplicantById['applicant']['id']
  ) => {
    updateApplicant({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Applicant {applicant?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ApplicantForm
          applicant={applicant}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
