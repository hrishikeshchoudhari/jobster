import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useQuery } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const GET_APPLICANTS_WITH_DETAIL = gql`
  query GetApplicantsWithDetail {
    getApplicantsWithDetail {
      id
      email
      role
      Applicant {
        Resume {
          id
          educations {
            id
            instituteName
            startYear
            endYear
            topic
            level
          }
          employments {
            id
            employerName
            startDate
            endDate
            role
            description
            skills
          }
        }
      }
    }
  }
`

const AllCandidatesPage = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)
  const { data, loading, error } = useQuery(GET_APPLICANTS_WITH_DETAIL)

  console.log(data)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="space-y-8">
      {data.getApplicantsWithDetail.map((user) => (
        <div key={user.id}>
          <h2 className="mb-4 text-2xl font-bold">{user.email}</h2>

          <div>
            <h3 className="mb-4 mt-6 text-xl font-bold">Education</h3>

            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                  <th className="px-6 py-3 text-left">Institute Name</th>
                  <th className="px-6 py-3 text-left">Start Year</th>
                  <th className="px-6 py-3 text-left">End Year</th>
                  <th className="px-6 py-3 text-left">Topic</th>
                  <th className="px-6 py-3 text-left">Level</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-600">
                {user.Applicant.Resume.educations.map((education) => (
                  <tr
                    key={education.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="px-6 py-3 text-left">
                      {education.instituteName}
                    </td>
                    <td className="px-6 py-3 text-left">
                      {education.startYear}
                    </td>
                    <td className="px-6 py-3 text-left">{education.endYear}</td>
                    <td className="px-6 py-3 text-left">{education.topic}</td>
                    <td className="px-6 py-3 text-left">{education.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <h3 className="mb-4 text-xl font-bold">Employment History</h3>

            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                  <th className="px-6 py-3 text-left">Employer Name</th>
                  <th className="px-6 py-3 text-left">Start Date</th>
                  <th className="px-6 py-3 text-left">End Date</th>
                  <th className="px-6 py-3 text-left">Role</th>
                  <th className="px-6 py-3 text-left">Description</th>
                  <th className="px-6 py-3 text-left">Skills</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-600">
                {user.Applicant.Resume.employments.map((employment) => (
                  <tr
                    key={employment.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="px-6 py-3 text-left">
                      {employment.employerName}
                    </td>
                    <td className="px-6 py-3 text-left">
                      {employment.startDate}
                    </td>
                    <td className="px-6 py-3 text-left">
                      {employment.endDate}
                    </td>
                    <td className="px-6 py-3 text-left">{employment.role}</td>
                    <td className="px-6 py-3 text-left">
                      {employment.description}
                    </td>
                    <td className="px-6 py-3 text-left">
                      {employment.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="mr-1 inline-block rounded-full bg-gray-200 px-2 py-1 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllCandidatesPage
