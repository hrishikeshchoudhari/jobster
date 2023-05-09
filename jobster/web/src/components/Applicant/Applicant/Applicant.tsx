import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteApplicantMutationVariables,
  FindApplicantById,
} from 'types/graphql'

const DELETE_APPLICANT_MUTATION = gql`
  mutation DeleteApplicantMutation($id: String!) {
    deleteApplicant(id: $id) {
      id
    }
  }
`

interface Props {
  applicant: NonNullable<FindApplicantById['applicant']>
}

const Applicant = ({ applicant }: Props) => {
  const [deleteApplicant] = useMutation(DELETE_APPLICANT_MUTATION, {
    onCompleted: () => {
      toast.success('Applicant deleted')
      navigate(routes.applicants())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteApplicantMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete applicant ' + id + '?')) {
      deleteApplicant({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Applicant {applicant.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{applicant.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{applicant.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editApplicant({ id: applicant.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(applicant.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Applicant
