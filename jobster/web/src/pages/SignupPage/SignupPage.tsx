import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
  SelectField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { UserRole } from 'src/lib/prismaEnums'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.applicantDashboard())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.email,
      password: data.password,
      userAttributes: { role: data.role as UserRole },
    })

    console.log(response)

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
      navigate(routes.applicantDashboard())
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="email"
                    className="rw-label text-primary"
                    errorClassName="rw-label rw-label-error text-accent-2"
                  >
                    Email
                  </Label>
                  <TextField
                    name="email"
                    className="rw-input border-primary"
                    errorClassName="rw-input rw-input-error border-accent-2"
                    ref={emailRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Email is required',
                      },
                    }}
                  />
                  <FieldError
                    name="email"
                    className="rw-field-error text-accent-2"
                  />

                  <Label
                    name="password"
                    className="rw-label text-primary"
                    errorClassName="rw-label rw-label-error text-accent-2"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input border-primary"
                    errorClassName="rw-input rw-input-error border-accent-2"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <FieldError
                    name="password"
                    className="rw-field-error text-accent-2"
                  />

                  <Label
                    name="role"
                    htmlFor="role"
                    className="rw-label text-primary"
                  >
                    Role
                  </Label>
                  <SelectField
                    id="role"
                    name="role"
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  >
                    <option value="">Select a role</option>
                    <option value="APPLICANT">Applicant</option>
                    <option value="RECRUITER">Recruiter</option>
                  </SelectField>
                  <FieldError
                    name="role"
                    className="rw-field-error text-accent-2"
                  />

                  <div className="rw-button-group">
                    <Submit className="rounded-full bg-primary px-4 py-2 font-bold text-white hover:bg-blue-700">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
