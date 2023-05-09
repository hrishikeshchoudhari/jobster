import type {
  QueryResolvers,
  MutationResolvers,
  RecruiterRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const recruiters: QueryResolvers['recruiters'] = () => {
  return db.recruiter.findMany()
}

export const recruiter: QueryResolvers['recruiter'] = ({ id }) => {
  return db.recruiter.findUnique({
    where: { id },
  })
}

export const createRecruiter: MutationResolvers['createRecruiter'] = ({
  input,
}) => {
  return db.recruiter.create({
    data: input,
  })
}

export const updateRecruiter: MutationResolvers['updateRecruiter'] = ({
  id,
  input,
}) => {
  return db.recruiter.update({
    data: input,
    where: { id },
  })
}

export const deleteRecruiter: MutationResolvers['deleteRecruiter'] = ({
  id,
}) => {
  return db.recruiter.delete({
    where: { id },
  })
}

export const Recruiter: RecruiterRelationResolvers = {
  User: (_obj, { root }) => {
    return db.recruiter.findUnique({ where: { id: root?.id } }).User()
  },
}
