import type { Prisma, Employment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EmploymentCreateArgs>({
  employment: {
    one: {
      data: {
        employerName: 'String',
        startDate: '2023-05-09T16:42:42.305Z',
        endDate: '2023-05-09T16:42:42.305Z',
        role: 'String',
        description: 'String',
        updatedAt: '2023-05-09T16:42:42.305Z',
        resume: {
          create: {
            updatedAt: '2023-05-09T16:42:42.305Z',
            applicant: {
              create: {
                User: {
                  create: {
                    email: 'String2966259',
                    role: 'ADMIN',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-05-09T16:42:42.305Z',
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
        employerName: 'String',
        startDate: '2023-05-09T16:42:42.305Z',
        endDate: '2023-05-09T16:42:42.305Z',
        role: 'String',
        description: 'String',
        updatedAt: '2023-05-09T16:42:42.305Z',
        resume: {
          create: {
            updatedAt: '2023-05-09T16:42:42.305Z',
            applicant: {
              create: {
                User: {
                  create: {
                    email: 'String6003456',
                    role: 'ADMIN',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2023-05-09T16:42:42.305Z',
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

export type StandardScenario = ScenarioData<Employment, 'employment'>
