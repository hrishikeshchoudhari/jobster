import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HirePage = () => {
  return (
    <>
      <MetaTags title="Hire" description="Hire page" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pb-12 pt-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            For <span className="text-blue-600">Recruiters</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Are you a recruiter seeking top talent? Jobster is your go-to
            platform for finding the best candidates for your open positions.
            Post jobs, review applicants, and manage the entire hiring process
            through our user-friendly interface.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="m-4 w-full rounded-xl bg-white p-6 shadow-md md:w-96">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Post a Job</h3>
              <p className="mt-2 text-gray-500">
                Easily post job openings and reach a wide pool of qualified
                candidates.
              </p>
            </div>
          </div>
          <div className="m-4 w-full rounded-xl bg-white p-6 shadow-md md:w-96">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Review Applicants</h3>
              <p className="mt-2 text-gray-500">
                Browse and filter through applicants to find the best match for
                your job openings.
              </p>
            </div>
          </div>
          <div className="m-4 w-full rounded-xl bg-white p-6 shadow-md md:w-96">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Manage Hiring</h3>
              <p className="mt-2 text-gray-500">
                Keep track of your hiring process and communicate with
                candidates easily.
              </p>
            </div>
          </div>
        </div>
        <div className="py-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Sign up for a recruiter account and start posting jobs and reviewing
            applicants today.
          </p>
          <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
            <Link className="text-white" to={routes.signup()}>
              Create an Account
            </Link>
          </button>
          <br />
          <br />
          <p>OR</p>
          <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
            <Link className="text-white" to={routes.login()}>
              Login to Apply
            </Link>
          </button>
        </div>
        <br />
        <br />
      </div>
    </>
  )
}

export default HirePage
