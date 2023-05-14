export const schema = gql`
  type User {
    id: String!
    email: String!
    role: UserRole!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
    applicantId: String
    recruiterId: String
    adminId: String
    Applicant: Applicant
    Recruiter: Recruiter
    Admin: Admin
  }

  enum UserRole {
    ADMIN
    APPLICANT
    RECRUITER
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    role: UserRole!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    applicantId: String
    recruiterId: String
    adminId: String
  }

  input UpdateUserInput {
    email: String
    role: UserRole
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    applicantId: String
    recruiterId: String
    adminId: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
