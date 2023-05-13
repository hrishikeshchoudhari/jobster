export const schema = gql`
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
    employments: [Employment!]! @requireAuth
    employment(id: String!): Employment @requireAuth
    employmentsByResumeId(resumeId: String!): [Employment!]! @requireAuth
  }

  input CreateEmploymentInput {
    resumeId: String!
    employerName: String!
    startDate: DateTime!
    endDate: DateTime!
    role: String!
    description: String!
    skills: [String!]!
  }

  input UpdateEmploymentInput {
    resumeId: String
    employerName: String
    startDate: DateTime
    endDate: DateTime
    role: String
    description: String
    skills: [String!]
  }

  type Mutation {
    createEmployment(input: CreateEmploymentInput!): Employment! @requireAuth
    updateEmployment(id: String!, input: UpdateEmploymentInput!): Employment!
      @requireAuth
    deleteEmployment(id: String!): Employment! @requireAuth
  }
`
