import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Recruiter/RecruitersCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeleteRecruiterMutationVariables,
  FindRecruiters,
} from 'types/graphql'

const DELETE_RECRUITER_MUTATION = gql`
  mutation DeleteRecruiterMutation($id: String!) {
    deleteRecruiter(id: $id) {
      id
    }
  }
`

const RecruitersList = ({ recruiters }: FindRecruiters) => {
  const [deleteRecruiter] = useMutation(DELETE_RECRUITER_MUTATION, {
    onCompleted: () => {
      toast.success('Recruiter deleted')
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

  const onDeleteClick = (id: DeleteRecruiterMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete recruiter ' + id + '?')) {
      deleteRecruiter({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {recruiters.map((recruiter) => (
            <tr key={recruiter.id}>
              <td>{truncate(recruiter.id)}</td>
              <td>{truncate(recruiter.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.recruiter({ id: recruiter.id })}
                    title={'Show recruiter ' + recruiter.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRecruiter({ id: recruiter.id })}
                    title={'Edit recruiter ' + recruiter.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete recruiter ' + recruiter.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(recruiter.id)}
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

export default RecruitersList
