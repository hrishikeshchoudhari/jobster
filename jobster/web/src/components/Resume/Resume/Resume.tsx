import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteResumeMutationVariables,
  FindResumeById,
} from 'types/graphql'

const DELETE_RESUME_MUTATION = gql`
  mutation DeleteResumeMutation($id: String!) {
    deleteResume(id: $id) {
      id
    }
  }
`

interface Props {
  resume: NonNullable<FindResumeById['resume']>
}

const Resume = ({ resume }: Props) => {
  const [deleteResume] = useMutation(DELETE_RESUME_MUTATION, {
    onCompleted: () => {
      toast.success('Resume deleted')
      navigate(routes.resumes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteResumeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete resume ' + id + '?')) {
      deleteResume({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Resume {resume.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{resume.id}</td>
            </tr>
            <tr>
              <th>Applicant id</th>
              <td>{resume.applicantId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(resume.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(resume.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editResume({ id: resume.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(resume.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Resume
