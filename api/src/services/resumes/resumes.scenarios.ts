import type { Prisma, Resume } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ResumeCreateArgs>({
  resume: {
    one: {
      data: {
        updatedAt: '2023-05-09T16:42:25.094Z',
        applicant: {
          create: {
            User: {
              create: {
                email: 'String4973445',
                role: 'ADMIN',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-05-09T16:42:25.094Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-05-09T16:42:25.094Z',
        applicant: {
          create: {
            User: {
              create: {
                email: 'String8623131',
                role: 'ADMIN',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-05-09T16:42:25.094Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Resume, 'resume'>
