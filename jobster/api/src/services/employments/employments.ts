import type {
  QueryResolvers,
  MutationResolvers,
  EmploymentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const employments: QueryResolvers['employments'] = () => {
  return db.employment.findMany()
}

export const employment: QueryResolvers['employment'] = ({ id }) => {
  return db.employment.findUnique({
    where: { id },
  })
}

export const createEmployment: MutationResolvers['createEmployment'] = ({
  input,
}) => {
  return db.employment.create({
    data: input,
  })
}

export const updateEmployment: MutationResolvers['updateEmployment'] = ({
  id,
  input,
}) => {
  return db.employment.update({
    data: input,
    where: { id },
  })
}

export const deleteEmployment: MutationResolvers['deleteEmployment'] = ({
  id,
}) => {
  return db.employment.delete({
    where: { id },
  })
}

export const Employment: EmploymentRelationResolvers = {
  resume: (_obj, { root }) => {
    return db.employment.findUnique({ where: { id: root?.id } }).resume()
  },
  skills: (_obj, { root }) => {
    return db.employment.findUnique({ where: { id: root?.id } }).skills()
  },
}

export const employmentsByResumeId = ({ resumeId }) => {
  return db.employment.findMany({
    where: { resumeId },
  })
}
