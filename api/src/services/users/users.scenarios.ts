import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String2950959',
        role: 'ADMIN',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-05-09T16:41:11.629Z',
      },
    },
    two: {
      data: {
        email: 'String7328023',
        role: 'ADMIN',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-05-09T16:41:11.629Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
