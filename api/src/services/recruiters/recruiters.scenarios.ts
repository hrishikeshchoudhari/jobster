import type { Prisma, Recruiter } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecruiterCreateArgs>({
  recruiter: {
    one: {
      data: {
        User: {
          create: {
            email: 'String5003302',
            role: 'ADMIN',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-05-09T16:41:36.608Z',
          },
        },
      },
    },
    two: {
      data: {
        User: {
          create: {
            email: 'String9146727',
            role: 'ADMIN',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-05-09T16:41:36.608Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Recruiter, 'recruiter'>
