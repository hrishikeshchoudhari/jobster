import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmploymentForm from 'src/components/Employment/EmploymentForm'

import type { CreateEmploymentInput } from 'types/graphql'

const CREATE_EMPLOYMENT_MUTATION = gql`
  mutation CreateEmploymentMutation($input: CreateEmploymentInput!) {
    createEmployment(input: $input) {
      id
    }
  }
`

const NewEmployment = () => {
  const [createEmployment, { loading, error }] = useMutation(
    CREATE_EMPLOYMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Employment created')
        navigate(routes.employments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateEmploymentInput) => {
    createEmployment({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Employment</h2>
      </header>
      <div className="rw-segment-main">
        <EmploymentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEmployment
