import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold">About Jobster</h1>
        <p className="mb-6 text-lg text-gray-700">
          Jobster is a platform that aims to connect job seekers and recruiters
          in a seamless and efficient manner. We believe in the power of
          technology to transform the recruitment process, making it more
          effective and accessible for all.
        </p>
        <h2 className="mb-4 text-3xl font-bold">Our Team</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <div
              className="mb-4 h-40 w-40 rounded-full"
              style={{
                backgroundImage: `url('/images/rishi-profile.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <h3 className="mb-2 text-2xl font-bold">Hrishikesh Choudhari</h3>
            <p className="text-gray-600">
              MSc Software Engineering with Management Studies
            </p>
            <p className="text-gray-600">Kingston University London</p>
            <p className="text-gray-600">2022-23</p>
            <a
              href="https://www.linkedin.com/in/hrishikeshchoudhari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              View LinkedIn Profile
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="mb-4 h-40 w-40 rounded-full"
              style={{
                backgroundImage: `url('/images/neeraj-profile.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <h3 className="mb-2 text-2xl font-bold">Neeraj Pal</h3>
            <p className="text-gray-600">MSc Software Engineering Student</p>
            <p className="text-gray-600">Kingston University London</p>
            <p className="text-gray-600">2022-23</p>
            <a
              href="https://www.linkedin.com/in/neeraj-pal-b8304315/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
