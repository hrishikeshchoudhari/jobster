import EducationCell from 'src/components/Education/EducationCell'

type EducationPageProps = {
  id: string
}

const EducationPage = ({ id }: EducationPageProps) => {
  return <EducationCell id={id} />
}

export default EducationPage
