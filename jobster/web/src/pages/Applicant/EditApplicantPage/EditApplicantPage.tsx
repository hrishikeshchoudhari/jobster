import EditApplicantCell from 'src/components/Applicant/EditApplicantCell'

type ApplicantPageProps = {
  id: string
}

const EditApplicantPage = ({ id }: ApplicantPageProps) => {
  return <EditApplicantCell id={id} />
}

export default EditApplicantPage
