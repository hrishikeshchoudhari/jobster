import type { FindAdminById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Admin from 'src/components/Admin/Admin'

export const QUERY = gql`
  query FindAdminById($id: String!) {
    admin: admin(id: $id) {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Admin not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ admin }: CellSuccessProps<FindAdminById>) => {
  return <Admin admin={admin} />
}
