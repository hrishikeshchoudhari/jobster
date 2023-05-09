import type { Prisma, Applicant } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ApplicantCreateArgs>({
  applicant: {
    one: {
      data: {
        User: {
          create: {
            email: 'String7318190',
            role: 'ADMIN',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-05-09T16:41:23.782Z',
          },
        },
      },
    },
    two: {
      data: {
        User: {
          create: {
            email: 'String1471839',
            role: 'ADMIN',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-05-09T16:41:23.783Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Applicant, 'applicant'>
