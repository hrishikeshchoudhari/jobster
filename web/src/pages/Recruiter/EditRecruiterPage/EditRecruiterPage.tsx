import EditRecruiterCell from 'src/components/Recruiter/EditRecruiterCell'

type RecruiterPageProps = {
  id: string
}

const EditRecruiterPage = ({ id }: RecruiterPageProps) => {
  return <EditRecruiterCell id={id} />
}

export default EditRecruiterPage
