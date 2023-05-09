import type { EditAdminById, UpdateAdminInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AdminForm from 'src/components/Admin/AdminForm'

export const QUERY = gql`
  query EditAdminById($id: String!) {
    admin: admin(id: $id) {
      id
      userId
    }
  }
`
const UPDATE_ADMIN_MUTATION = gql`
  mutation UpdateAdminMutation($id: String!, $input: UpdateAdminInput!) {
    updateAdmin(id: $id, input: $input) {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ admin }: CellSuccessProps<EditAdminById>) => {
  const [updateAdmin, { loading, error }] = useMutation(UPDATE_ADMIN_MUTATION, {
    onCompleted: () => {
      toast.success('Admin updated')
      navigate(routes.admins())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateAdminInput,
    id: EditAdminById['admin']['id']
  ) => {
    updateAdmin({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Admin {admin?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AdminForm
          admin={admin}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
