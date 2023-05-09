import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RecruiterForm from 'src/components/Recruiter/RecruiterForm'

import type { CreateRecruiterInput } from 'types/graphql'

const CREATE_RECRUITER_MUTATION = gql`
  mutation CreateRecruiterMutation($input: CreateRecruiterInput!) {
    createRecruiter(input: $input) {
      id
    }
  }
`

const NewRecruiter = () => {
  const [createRecruiter, { loading, error }] = useMutation(
    CREATE_RECRUITER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Recruiter created')
        navigate(routes.recruiters())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateRecruiterInput) => {
    createRecruiter({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Recruiter</h2>
      </header>
      <div className="rw-segment-main">
        <RecruiterForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRecruiter
