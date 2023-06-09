import type { CreateEducationInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EducationForm from 'src/components/Education/EducationForm'

const CREATE_EDUCATION_MUTATION = gql`
  mutation CreateEducationMutation($input: CreateEducationInput!) {
    createEducation(input: $input) {
      id
    }
  }
`
type NewEducationProps = {
  onCompleted: () => void
  resumeId: string
}

const NewEducation = ({ onCompleted, resumeId }: NewEducationProps) => {
  const [createEducation, { loading, error }] = useMutation(
    CREATE_EDUCATION_MUTATION,
    {
      onCompleted: () => {
        onCompleted()
        navigate(routes.cvBuilder())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateEducationInput) => {
    createEducation({ variables: { input: { ...input, resumeId } } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Education</h2>
      </header>
      <div className="rw-segment-main">
        <EducationForm
          onSave={onSave}
          loading={loading}
          error={error}
          resumeId={resumeId}
        />
      </div>
    </div>
  )
}

export default NewEducation
