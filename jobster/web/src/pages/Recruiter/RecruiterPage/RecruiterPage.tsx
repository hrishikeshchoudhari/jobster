import RecruiterCell from 'src/components/Recruiter/RecruiterCell'

type RecruiterPageProps = {
  id: string
}

const RecruiterPage = ({ id }: RecruiterPageProps) => {
  return <RecruiterCell id={id} />
}

export default RecruiterPage
