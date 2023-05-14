import type { Prisma, Admin } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AdminCreateArgs>({
  admin: {
    one: {
      data: {
        User: {
          create: {
            email: 'String8249116',
            role: 'ADMIN',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-05-09T16:41:48.778Z',
          },
        },
      },
    },
    two: {
      data: {
        User: {
          create: {
            email: 'String9715349',
            role: 'ADMIN',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-05-09T16:41:48.778Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Admin, 'admin'>
