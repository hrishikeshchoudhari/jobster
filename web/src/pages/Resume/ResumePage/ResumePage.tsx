import ResumeCell from 'src/components/Resume/ResumeCell'

type ResumePageProps = {
  id: string
}

const ResumePage = ({ id }: ResumePageProps) => {
  return <ResumeCell id={id} />
}

export default ResumePage
