import type { CreateEmploymentInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmploymentForm from 'src/components/Employment/EmploymentForm'

const CREATE_EMPLOYMENT_MUTATION = gql`
  mutation CreateEmploymentMutation($input: CreateEmploymentInput!) {
    createEmployment(input: $input) {
      id
    }
  }
`

type NewEmploymentProps = {
  onCompleted: () => void
  resumeId: string
}

const NewEmployment = ({ onCompleted, resumeId }: NewEmploymentProps) => {
  const [createEmployment, { loading, error }] = useMutation(
    CREATE_EMPLOYMENT_MUTATION,
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

  const onSave = (input: CreateEmploymentInput) => {
    createEmployment({ variables: { input: { ...input, resumeId } } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Employment</h2>
      </header>
      <div className="rw-segment-main">
        <EmploymentForm
          onSave={onSave}
          loading={loading}
          error={error}
          resumeId={resumeId}
        />
      </div>
    </div>
  )
}

export default NewEmployment
