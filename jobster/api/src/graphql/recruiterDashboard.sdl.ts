export const schema = gql`
  type Applicant {
    id: String!
    userId: String!
    User: User!
    Resume: Resume!
  }

  type Resume {
    id: String!
    applicant: Applicant!
    applicantId: String!
    educations: [Education]!
    employments: [Employment]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

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

  type Employment {
    id: String!
    resumeId: String!
    resume: Resume!
    employerName: String!
    startDate: DateTime!
    endDate: DateTime!
    role: String!
    description: String!
    skills: [String!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    getApplicantsWithDetail: [User!]! @requireAuth
  }
`
