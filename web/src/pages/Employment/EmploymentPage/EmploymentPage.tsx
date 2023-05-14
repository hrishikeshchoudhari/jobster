import EmploymentCell from 'src/components/Employment/EmploymentCell'

type EmploymentPageProps = {
  id: string
}

const EmploymentPage = ({ id }: EmploymentPageProps) => {
  return <EmploymentCell id={id} />
}

export default EmploymentPage
