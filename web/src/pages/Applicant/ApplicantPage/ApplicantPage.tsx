import ApplicantCell from 'src/components/Applicant/ApplicantCell'

type ApplicantPageProps = {
  id: string
}

const ApplicantPage = ({ id }: ApplicantPageProps) => {
  return <ApplicantCell id={id} />
}

export default ApplicantPage
