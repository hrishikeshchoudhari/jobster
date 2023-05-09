import type {
  QueryResolvers,
  MutationResolvers,
  ApplicantRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const applicants: QueryResolvers['applicants'] = () => {
  return db.applicant.findMany()
}

export const applicant: QueryResolvers['applicant'] = ({ id }) => {
  return db.applicant.findUnique({
    where: { id },
  })
}

export const createApplicant: MutationResolvers['createApplicant'] = ({
  input,
}) => {
  return db.applicant.create({
    data: input,
  })
}

export const updateApplicant: MutationResolvers['updateApplicant'] = ({
  id,
  input,
}) => {
  return db.applicant.update({
    data: input,
    where: { id },
  })
}

export const deleteApplicant: MutationResolvers['deleteApplicant'] = ({
  id,
}) => {
  return db.applicant.delete({
    where: { id },
  })
}

export const Applicant: ApplicantRelationResolvers = {
  User: (_obj, { root }) => {
    return db.applicant.findUnique({ where: { id: root?.id } }).User()
  },
  Resume: (_obj, { root }) => {
    return db.applicant.findUnique({ where: { id: root?.id } }).Resume()
  },
}
