import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WorkPage = () => {
  return (
    <>
      <MetaTags title="Work" description="Work page" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pb-12 pt-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            For <span className="text-blue-600">Applicants</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Are you looking for your dream job? Jobster is the place to be. We
            have a wide range of job opportunities from reputable companies in
            various industries. Browse job openings, create your profile, and
            apply for jobs with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Job section */}
          {/* Add multiple job sections, replacing the content as necessary */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Job Title 1</h3>
              <p className="mt-2 text-gray-500">Company 1</p>
              <p className="text-gray-500">Location 1</p>
              <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
                <Link className="text-white" to={routes.login()}>
                  Login Now
                </Link>
              </button>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Job Title 2</h3>
              <p className="mt-2 text-gray-500">Company 2</p>
              <p className="text-gray-500">Location 2</p>
              <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
                <Link className="text-white" to={routes.login()}>
                  Login Now
                </Link>
              </button>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Job Title 3</h3>
              <p className="mt-2 text-gray-500">Company 3</p>
              <p className="text-gray-500">Location 3</p>
              <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
                <Link className="text-white" to={routes.login()}>
                  Login Now
                </Link>
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Get Started Building a CV</h3>
            <p className="mt-2 text-gray-500">Build your resume with us</p>
            <p className="text-gray-500">
              Include detailed education & employment history
            </p>
            <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
              <Link className="text-white" to={routes.signup()}>
                Create an Account
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkPage
