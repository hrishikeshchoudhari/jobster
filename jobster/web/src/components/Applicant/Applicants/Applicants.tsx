import type {
  DeleteApplicantMutationVariables,
  FindApplicants,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Applicant/ApplicantsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_APPLICANT_MUTATION = gql`
  mutation DeleteApplicantMutation($id: String!) {
    deleteApplicant(id: $id) {
      id
    }
  }
`

const ApplicantsList = ({ applicants }: FindApplicants) => {
  const [deleteApplicant] = useMutation(DELETE_APPLICANT_MUTATION, {
    onCompleted: () => {
      toast.success('Applicant deleted')
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

  const onDeleteClick = (id: DeleteApplicantMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete applicant ' + id + '?')) {
      deleteApplicant({ variables: { id } })
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
          {applicants.map((applicant) => (
            <tr key={applicant.id}>
              <td>{truncate(applicant.id)}</td>
              <td>{truncate(applicant.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.applicant({ id: applicant.id })}
                    title={'Show applicant ' + applicant.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editApplicant({ id: applicant.id })}
                    title={'Edit applicant ' + applicant.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete applicant ' + applicant.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(applicant.id)}
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

export default ApplicantsList
