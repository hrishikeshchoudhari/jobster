import type { FindEducations, FindEducationsByResumeId } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Educations from 'src/components/Education/Educations'

export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  }
}

// export const QUERY = gql`
//   query FindEducations {
//     educations {
//       id
//       resumeId
//       instituteName
//       startYear
//       endYear
//       topic
//       level
//       createdAt
//       updatedAt
//     }
//   }
// `

export const QUERY = gql`
  query FindEducationsByResumeId($resumeId: String!) {
    educations: educationsByResumeId(resumeId: $resumeId) {
      id
      resumeId
      instituteName
      startYear
      endYear
      topic
      level
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No educations yet. '}
      <Link to={routes.newEducation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  educations,
}: CellSuccessProps<FindEducationsByResumeId>) => {
  return <Educations educations={educations} />
}
