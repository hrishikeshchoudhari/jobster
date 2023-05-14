import { Link, routes } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'
import { MetaTags } from '@redwoodjs/web'

const RecruiterDashboardPage = () => {
  return (
    <>
      <MetaTags
        title="RecruiterDashboard"
        description="Recruiter Dashboard page"
      />

      <div className="min-h-screen bg-gray-100 px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold">
          Welcome to your Recruiter Dashboard
        </h1>

        <div className="dashboard-sections grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Post jobs */}
          <div className="cv-builder-section rounded bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-semibold">Post Jobs</h2>
            <p className="mb-6 text-gray-600">
              Get started on posting new jobs on Jobster.
            </p>
            <Link
              to={routes.recruiterDashboard()}
              className="inline-block rounded bg-indigo-600 px-6 py-2 font-semibold text-white"
            >
              Post Job
            </Link>
          </div>

          {/* All Candidates Section */}
          <div className="job-search-section rounded bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-semibold">View All Candidates</h2>
            <p className="mb-6 text-gray-600">
              Find the perfect candidate that matches your required skills and
              application.
            </p>
            <Link
              to={routes.allCandidates()}
              className="inline-block rounded bg-indigo-600 px-6 py-2 font-semibold text-white"
            >
              View Candidates
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default RecruiterDashboardPage
