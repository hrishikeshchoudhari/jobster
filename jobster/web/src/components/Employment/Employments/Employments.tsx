import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Employment/EmploymentsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteEmploymentMutationVariables,
  FindEmployments,
} from 'types/graphql'

const DELETE_EMPLOYMENT_MUTATION = gql`
  mutation DeleteEmploymentMutation($id: String!) {
    deleteEmployment(id: $id) {
      id
    }
  }
`

const EmploymentsList = ({ employments }: FindEmployments) => {
  const [deleteEmployment] = useMutation(DELETE_EMPLOYMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Employment deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteEmploymentMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete employment ' + id + '?')) {
      deleteEmployment({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Resume id</th>
            <th>Employer name</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Role</th>
            <th>Description</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {employments.map((employment) => (
            <tr key={employment.id}>
              <td>{truncate(employment.id)}</td>
              <td>{truncate(employment.resumeId)}</td>
              <td>{truncate(employment.employerName)}</td>
              <td>{timeTag(employment.startDate)}</td>
              <td>{timeTag(employment.endDate)}</td>
              <td>{truncate(employment.role)}</td>
              <td>{truncate(employment.description)}</td>
              <td>{timeTag(employment.createdAt)}</td>
              <td>{timeTag(employment.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.employment({ id: employment.id })}
                    title={'Show employment ' + employment.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEmployment({ id: employment.id })}
                    title={'Edit employment ' + employment.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete employment ' + employment.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(employment.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmploymentsList
