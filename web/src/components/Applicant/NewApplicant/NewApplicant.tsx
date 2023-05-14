import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ApplicantForm from 'src/components/Applicant/ApplicantForm'

import type { CreateApplicantInput } from 'types/graphql'

const CREATE_APPLICANT_MUTATION = gql`
  mutation CreateApplicantMutation($input: CreateApplicantInput!) {
    createApplicant(input: $input) {
      id
    }
  }
`

const NewApplicant = () => {
  const [createApplicant, { loading, error }] = useMutation(
    CREATE_APPLICANT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Applicant created')
        navigate(routes.applicants())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateApplicantInput) => {
    createApplicant({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Applicant</h2>
      </header>
      <div className="rw-segment-main">
        <ApplicantForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewApplicant
