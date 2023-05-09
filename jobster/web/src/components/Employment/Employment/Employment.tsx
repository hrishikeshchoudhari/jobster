import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteEmploymentMutationVariables,
  FindEmploymentById,
} from 'types/graphql'

const DELETE_EMPLOYMENT_MUTATION = gql`
  mutation DeleteEmploymentMutation($id: String!) {
    deleteEmployment(id: $id) {
      id
    }
  }
`

interface Props {
  employment: NonNullable<FindEmploymentById['employment']>
}

const Employment = ({ employment }: Props) => {
  const [deleteEmployment] = useMutation(DELETE_EMPLOYMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Employment deleted')
      navigate(routes.employments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteEmploymentMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete employment ' + id + '?')) {
      deleteEmployment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Employment {employment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{employment.id}</td>
            </tr>
            <tr>
              <th>Resume id</th>
              <td>{employment.resumeId}</td>
            </tr>
            <tr>
              <th>Employer name</th>
              <td>{employment.employerName}</td>
            </tr>
            <tr>
              <th>Start date</th>
              <td>{timeTag(employment.startDate)}</td>
            </tr>
            <tr>
              <th>End date</th>
              <td>{timeTag(employment.endDate)}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{employment.role}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{employment.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(employment.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(employment.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEmployment({ id: employment.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(employment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Employment
