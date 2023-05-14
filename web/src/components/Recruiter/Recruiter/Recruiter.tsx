import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteRecruiterMutationVariables,
  FindRecruiterById,
} from 'types/graphql'

const DELETE_RECRUITER_MUTATION = gql`
  mutation DeleteRecruiterMutation($id: String!) {
    deleteRecruiter(id: $id) {
      id
    }
  }
`

interface Props {
  recruiter: NonNullable<FindRecruiterById['recruiter']>
}

const Recruiter = ({ recruiter }: Props) => {
  const [deleteRecruiter] = useMutation(DELETE_RECRUITER_MUTATION, {
    onCompleted: () => {
      toast.success('Recruiter deleted')
      navigate(routes.recruiters())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteRecruiterMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete recruiter ' + id + '?')) {
      deleteRecruiter({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Recruiter {recruiter.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{recruiter.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{recruiter.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRecruiter({ id: recruiter.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(recruiter.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Recruiter
