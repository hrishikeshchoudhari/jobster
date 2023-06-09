import EditSkillCell from 'src/components/Skill/EditSkillCell'

type SkillPageProps = {
  id: string
}

const EditSkillPage = ({ id }: SkillPageProps) => {
  return <EditSkillCell id={id} />
}

export default EditSkillPage
