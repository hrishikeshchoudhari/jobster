import type { EditRecruiterById, UpdateRecruiterInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RecruiterForm from 'src/components/Recruiter/RecruiterForm'

export const QUERY = gql`
  query EditRecruiterById($id: String!) {
    recruiter: recruiter(id: $id) {
      id
      userId
    }
  }
`
const UPDATE_RECRUITER_MUTATION = gql`
  mutation UpdateRecruiterMutation(
    $id: String!
    $input: UpdateRecruiterInput!
  ) {
    updateRecruiter(id: $id, input: $input) {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ recruiter }: CellSuccessProps<EditRecruiterById>) => {
  const [updateRecruiter, { loading, error }] = useMutation(
    UPDATE_RECRUITER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Recruiter updated')
        navigate(routes.recruiters())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateRecruiterInput,
    id: EditRecruiterById['recruiter']['id']
  ) => {
    updateRecruiter({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Recruiter {recruiter?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RecruiterForm
          recruiter={recruiter}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
