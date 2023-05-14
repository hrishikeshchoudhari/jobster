import React, { useState } from 'react'

// import cuid from 'cuid'

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
import EmploymentsCell from 'src/components/Employment/EmploymentsCell'
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
    window.location.reload()
  }

  const [refetchSignalEdu, setRefetchSignalEdu] = useState(0)
  const [refetchSignalEmp, setRefetchSignalEmp] = useState(0)

  return (
    <div>
      {currentUser.Applicant.Resume ? (
        <>
          {currentUser.Applicant.Resume.id ? (
            <ResumeCell id={currentUser.Applicant.Resume.id} />
          ) : null}

          <NewEducation
            resumeId={currentUser.Applicant.Resume.id}
            onCompleted={() => setRefetchSignalEdu(refetchSignalEdu + 1)}
          />

          {currentUser.Applicant.Resume.id ? (
            <EducationsCell
              key={refetchSignalEdu}
              resumeId={currentUser.Applicant.Resume.id}
            />
          ) : null}

          <NewEmployment
            resumeId={currentUser.Applicant.Resume.id}
            onCompleted={() => setRefetchSignalEmp(refetchSignalEmp + 1)}
          />

          {currentUser.Applicant.Resume.id ? (
            <EmploymentsCell resumeId={currentUser.Applicant.Resume.id} />
          ) : null}
        </>
      ) : (
        <button className="rw-button rw-button-green" onClick={handleClick}>
          Initiate Resume
        </button>
      )}
    </div>
  )
}

export default CvBuilderPage
