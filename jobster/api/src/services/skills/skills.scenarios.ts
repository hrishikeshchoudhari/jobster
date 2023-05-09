import type { Prisma, Skill } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SkillCreateArgs>({
  skill: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2023-05-09T16:42:50.530Z',
        employment: {
          create: {
            employerName: 'String',
            startDate: '2023-05-09T16:42:50.530Z',
            endDate: '2023-05-09T16:42:50.530Z',
            role: 'String',
            description: 'String',
            updatedAt: '2023-05-09T16:42:50.530Z',
            resume: {
              create: {
                updatedAt: '2023-05-09T16:42:50.530Z',
                applicant: {
                  create: {
                    User: {
                      create: {
                        email: 'String616488',
                        role: 'ADMIN',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2023-05-09T16:42:50.530Z',
                      },
                    },
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
        name: 'String',
        updatedAt: '2023-05-09T16:42:50.530Z',
        employment: {
          create: {
            employerName: 'String',
            startDate: '2023-05-09T16:42:50.530Z',
            endDate: '2023-05-09T16:42:50.530Z',
            role: 'String',
            description: 'String',
            updatedAt: '2023-05-09T16:42:50.530Z',
            resume: {
              create: {
                updatedAt: '2023-05-09T16:42:50.530Z',
                applicant: {
                  create: {
                    User: {
                      create: {
                        email: 'String9726255',
                        role: 'ADMIN',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2023-05-09T16:42:50.530Z',
                      },
                    },
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

export type StandardScenario = ScenarioData<Skill, 'skill'>
