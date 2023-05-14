import { db } from 'src/lib/db'

export const getApplicantsWithDetail = () => {
  return db.user.findMany({
    where: {
      role: 'APPLICANT',
    },
    include: {
      Applicant: {
        include: {
          Resume: {
            include: {
              educations: true,
              employments: true,
            },
          },
        },
      },
    },
  })
}
