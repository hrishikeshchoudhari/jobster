import { Link, routes } from '@redwoodjs/router'

import { useAuth } from '../../auth'

type InternalLayoutProps = {
  children?: React.ReactNode
}

const InternalLayout = ({ children }: InternalLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
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
                  <li>
                    <Link
                      className="text-white"
                      to={routes.applicantDashboard()}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      className="text-white"
                      type="button"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main className="bg-light-gray text-dark-gray">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  )
}

export default InternalLayout
