import { Link, routes } from '@redwoodjs/router'

type JobsterLayoutProps = {
  children?: React.ReactNode
}

const JobsterLayout = ({ children }: JobsterLayoutProps) => {
  return (
    <>
      <header className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-4xl text-white">Jobster</h1>
            </div>
            <div className="hidden md:block">
              <nav className="ml-auto">
                <ul className="flex items-center space-x-6">
                  <li className="text-white">Home</li>
                  <li>
                    <Link className="text-white" to={routes.work()}>
                      Applicants
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to={routes.hire()}>
                      Recruiters
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to={routes.about()}>
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default JobsterLayout
