import type { Prisma, Education } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EducationCreateArgs>({
  education: {
    one: {
      data: {
        instituteName: 'String',
        startYear: 5711895,
        endYear: 2081720,
        topic: 'String',
        level: 'SCHOOL',
        updatedAt: '2023-05-09T16:42:32.907Z',
        resume: {
          create: {
            updatedAt: '2023-05-09T16:42:32.907Z',
            applicant: {
              create: {
                User: {
                  create: {
                    email: 'String3983930',
                    role: 'ADMIN',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-05-09T16:42:32.907Z',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        instituteName: 'String',
        startYear: 1520117,
        endYear: 3855383,
        topic: 'String',
        level: 'SCHOOL',
        updatedAt: '2023-05-09T16:42:32.907Z',
        resume: {
          create: {
            updatedAt: '2023-05-09T16:42:32.907Z',
            applicant: {
              create: {
                User: {
                  create: {
                    email: 'String2772519',
                    role: 'ADMIN',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-05-09T16:42:32.907Z',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Education, 'education'>
