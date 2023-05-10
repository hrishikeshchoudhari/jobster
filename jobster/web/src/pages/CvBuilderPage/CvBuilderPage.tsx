import cuid from 'cuid'

import {
  Form,
  Label,
  TextField,
  SelectField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import ApplicantCell from 'src/components/Applicant/ApplicantCell'
import EducationsCell from 'src/components/Education/EducationsCell'
import NewEducation from 'src/components/Education/NewEducation/NewEducation'
import EmploymentsCell from 'src/components/Employment/EmploymentCell'
import NewEmployment from 'src/components/Employment/NewEmployment/NewEmployment'
import { useCreateResume } from 'src/components/Resume/NewResume/NewResume'
import ResumeCell from 'src/components/Resume/ResumeCell'

const CvBuilderPage = () => {
  ;<MetaTags title="Resume Builder"></MetaTags>

  const { currentUser } = useAuth()
  console.log('currentuser -- ', currentUser)

  const { createResume, loading, error } = useCreateResume()

  const handleClick = () => {
    createResume({ applicantId: currentUser.Applicant.id })
    // navigate(routes.cvBuilder())
  }

  return (
    <div>
      <ApplicantCell id={currentUser.Applicant.id} />
      <button className="rw-button rw-button-green" onClick={handleClick}>
        Initiate Resume
      </button>
      <ResumeCell id={currentUser.Applicant.Resume.id} />
      <NewEducation />
      <EducationsCell />
      <NewEmployment />
      <EmploymentsCell />
    </div>
  )
}

export default CvBuilderPage
