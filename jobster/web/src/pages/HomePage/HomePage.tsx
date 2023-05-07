import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="pb-12 pt-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to <span className="text-blue-600">Jobster</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          Jobster is a next-generation job portal that connects talented
          applicants with top recruiters in the industry. Leveraging the power
          of web3 technologies, we aim to revolutionize the way job seekers and
          employers find each other and collaborate on exciting new
          opportunities.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Feature section */}
        {/* Add 3 or more feature sections, replacing the content as necessary */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Feature 1</h3>
            <p className="mt-2 text-gray-500">
              Description of feature 1 goes here.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Feature 2</h3>
            <p className="mt-2 text-gray-500">
              Description of feature 2 goes here.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Feature 3</h3>
            <p className="mt-2 text-gray-500">
              Description of feature 3 goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
