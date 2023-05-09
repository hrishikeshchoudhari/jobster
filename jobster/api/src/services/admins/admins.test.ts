import type { Admin } from '@prisma/client'

import { admins, admin, createAdmin, updateAdmin, deleteAdmin } from './admins'
import type { StandardScenario } from './admins.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('admins', () => {
  scenario('returns all admins', async (scenario: StandardScenario) => {
    const result = await admins()

    expect(result.length).toEqual(Object.keys(scenario.admin).length)
  })

  scenario('returns a single admin', async (scenario: StandardScenario) => {
    const result = await admin({ id: scenario.admin.one.id })

    expect(result).toEqual(scenario.admin.one)
  })

  scenario('creates a admin', async (scenario: StandardScenario) => {
    const result = await createAdmin({
      input: { userId: scenario.admin.two.userId },
    })

    expect(result.userId).toEqual(scenario.admin.two.userId)
  })

  scenario('updates a admin', async (scenario: StandardScenario) => {
    const original = (await admin({ id: scenario.admin.one.id })) as Admin
    const result = await updateAdmin({
      id: original.id,
      input: { userId: scenario.admin.two.userId },
    })

    expect(result.userId).toEqual(scenario.admin.two.userId)
  })

  scenario('deletes a admin', async (scenario: StandardScenario) => {
    const original = (await deleteAdmin({ id: scenario.admin.one.id })) as Admin
    const result = await admin({ id: original.id })

    expect(result).toEqual(null)
  })
})
