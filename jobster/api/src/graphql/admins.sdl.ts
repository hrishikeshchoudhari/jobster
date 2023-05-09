export const schema = gql`
  type Admin {
    id: String!
    userId: String!
    User: User!
  }

  type Query {
    admins: [Admin!]! @requireAuth
    admin(id: String!): Admin @requireAuth
  }

  input CreateAdminInput {
    userId: String!
  }

  input UpdateAdminInput {
    userId: String
  }

  type Mutation {
    createAdmin(input: CreateAdminInput!): Admin! @requireAuth
    updateAdmin(id: String!, input: UpdateAdminInput!): Admin! @requireAuth
    deleteAdmin(id: String!): Admin! @requireAuth
  }
`
