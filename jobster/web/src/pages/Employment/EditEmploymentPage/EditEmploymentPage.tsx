import EditEmploymentCell from 'src/components/Employment/EditEmploymentCell'

type EmploymentPageProps = {
  id: string
}

const EditEmploymentPage = ({ id }: EmploymentPageProps) => {
  return <EditEmploymentCell id={id} />
}

export default EditEmploymentPage
