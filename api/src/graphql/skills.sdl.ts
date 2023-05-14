export const schema = gql`
  type Skill {
    id: String!
    employmentId: String!
    employment: Employment!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    skills: [Skill!]! @requireAuth
    skill(id: String!): Skill @requireAuth
  }

  input CreateSkillInput {
    employmentId: String!
    name: String!
  }

  input UpdateSkillInput {
    employmentId: String
    name: String
  }

  type Mutation {
    createSkill(input: CreateSkillInput!): Skill! @requireAuth
    updateSkill(id: String!, input: UpdateSkillInput!): Skill! @requireAuth
    deleteSkill(id: String!): Skill! @requireAuth
  }
`
