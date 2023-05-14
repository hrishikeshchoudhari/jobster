export const schema = gql`
  type Resume {
    id: String!
    applicant: Applicant!
    applicantId: String!
    educations: [Education]!
    employments: [Employment]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    resumes: [Resume!]! @requireAuth
    resume(id: String!): Resume @requireAuth
  }

  input CreateResumeInput {
    applicantId: String!
  }

  input UpdateResumeInput {
    applicantId: String
  }

  type Mutation {
    createResume(input: CreateResumeInput!): Resume! @requireAuth
    updateResume(id: String!, input: UpdateResumeInput!): Resume! @requireAuth
    deleteResume(id: String!): Resume! @requireAuth
  }
`
