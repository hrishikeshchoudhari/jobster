import EditEducationCell from 'src/components/Education/EditEducationCell'

type EducationPageProps = {
  id: string
}

const EditEducationPage = ({ id }: EducationPageProps) => {
  return <EditEducationCell id={id} />
}

export default EditEducationPage
