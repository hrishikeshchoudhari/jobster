export const schema = gql`
  type Recruiter {
    id: String!
    userId: String!
    User: User!
  }

  type Query {
    recruiters: [Recruiter!]! @requireAuth
    recruiter(id: String!): Recruiter @requireAuth
  }

  input CreateRecruiterInput {
    userId: String!
  }

  input UpdateRecruiterInput {
    userId: String
  }

  type Mutation {
    createRecruiter(input: CreateRecruiterInput!): Recruiter! @requireAuth
    updateRecruiter(id: String!, input: UpdateRecruiterInput!): Recruiter!
      @requireAuth
    deleteRecruiter(id: String!): Recruiter! @requireAuth
  }
`
