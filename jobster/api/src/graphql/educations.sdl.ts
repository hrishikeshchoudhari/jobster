export const schema = gql`
  type Education {
    id: String!
    resumeId: String!
    resume: Resume!
    instituteName: String!
    startYear: Int!
    endYear: Int!
    topic: String!
    level: Level!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum Level {
    SCHOOL
    BACHELORS
    MASTERS
    PHD
  }

  type Query {
    educations: [Education!]! @requireAuth
    education(id: String!): Education @requireAuth
  }

  input CreateEducationInput {
    resumeId: String!
    instituteName: String!
    startYear: Int!
    endYear: Int!
    topic: String!
    level: Level!
  }

  input UpdateEducationInput {
    resumeId: String
    instituteName: String
    startYear: Int
    endYear: Int
    topic: String
    level: Level
  }

  type Mutation {
    createEducation(input: CreateEducationInput!): Education! @requireAuth
    updateEducation(id: String!, input: UpdateEducationInput!): Education!
      @requireAuth
    deleteEducation(id: String!): Education! @requireAuth
  }
`
