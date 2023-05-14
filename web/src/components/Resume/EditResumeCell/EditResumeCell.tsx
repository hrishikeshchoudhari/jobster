import type { EditResumeById, UpdateResumeInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ResumeForm from 'src/components/Resume/ResumeForm'

export const QUERY = gql`
  query EditResumeById($id: String!) {
    resume: resume(id: $id) {
      id
      applicantId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_RESUME_MUTATION = gql`
  mutation UpdateResumeMutation($id: String!, $input: UpdateResumeInput!) {
    updateResume(id: $id, input: $input) {
      id
      applicantId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ resume }: CellSuccessProps<EditResumeById>) => {
  const [updateResume, { loading, error }] = useMutation(
    UPDATE_RESUME_MUTATION,
    {
      onCompleted: () => {
        toast.success('Resume updated')
        navigate(routes.resumes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateResumeInput,
    id: EditResumeById['resume']['id']
  ) => {
    updateResume({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Resume {resume?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ResumeForm
          resume={resume}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
