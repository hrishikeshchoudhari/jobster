import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ApplicantDashboardPage = () => {
  return (
    <>
      <MetaTags
        title="ApplicantDashboard"
        description="ApplicantDashboard page"
      />

      <div className="min-h-screen bg-gray-100 px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold">
          Welcome to your Applicant Dashboard
        </h1>

        <div className="dashboard-sections grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* CV Builder Section */}
          <div className="cv-builder-section rounded bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-semibold">Build Your CV</h2>
            <p className="mb-6 text-gray-600">
              Get started on creating your professional CV to impress potential
              employers.
            </p>
            <Link
              to={routes.cvBuilder()}
              className="inline-block rounded bg-indigo-600 px-6 py-2 font-semibold text-white"
            >
              Start Building Your CV
            </Link>
          </div>

          {/* Job Search Section */}
          <div className="job-search-section rounded bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-semibold">Search for Jobs</h2>
            <p className="mb-6 text-gray-600">
              Find the perfect job that matches your skills and interests.
            </p>
            <Link
              to={routes.home()}
              className="inline-block rounded bg-indigo-600 px-6 py-2 font-semibold text-white"
            >
              Start Job Search
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplicantDashboardPage
