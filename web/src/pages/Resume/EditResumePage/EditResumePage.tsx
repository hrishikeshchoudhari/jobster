import EditResumeCell from 'src/components/Resume/EditResumeCell'

type ResumePageProps = {
  id: string
}

const EditResumePage = ({ id }: ResumePageProps) => {
  return <EditResumeCell id={id} />
}

export default EditResumePage
