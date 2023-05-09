export const schema = gql`
  type Applicant {
    id: String!
    userId: String!
    User: User!
    Resume: [Resume]!
  }

  type Query {
    applicants: [Applicant!]! @requireAuth
    applicant(id: String!): Applicant @requireAuth
  }

  input CreateApplicantInput {
    userId: String!
  }

  input UpdateApplicantInput {
    userId: String
  }

  type Mutation {
    createApplicant(input: CreateApplicantInput!): Applicant! @requireAuth
    updateApplicant(id: String!, input: UpdateApplicantInput!): Applicant!
      @requireAuth
    deleteApplicant(id: String!): Applicant! @requireAuth
  }
`
