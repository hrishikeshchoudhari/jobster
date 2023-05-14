import type { Recruiter } from '@prisma/client'

import {
  recruiters,
  recruiter,
  createRecruiter,
  updateRecruiter,
  deleteRecruiter,
} from './recruiters'
import type { StandardScenario } from './recruiters.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recruiters', () => {
  scenario('returns all recruiters', async (scenario: StandardScenario) => {
    const result = await recruiters()

    expect(result.length).toEqual(Object.keys(scenario.recruiter).length)
  })

  scenario('returns a single recruiter', async (scenario: StandardScenario) => {
    const result = await recruiter({ id: scenario.recruiter.one.id })

    expect(result).toEqual(scenario.recruiter.one)
  })

  scenario('creates a recruiter', async (scenario: StandardScenario) => {
    const result = await createRecruiter({
      input: { userId: scenario.recruiter.two.userId },
    })

    expect(result.userId).toEqual(scenario.recruiter.two.userId)
  })

  scenario('updates a recruiter', async (scenario: StandardScenario) => {
    const original = (await recruiter({
      id: scenario.recruiter.one.id,
    })) as Recruiter
    const result = await updateRecruiter({
      id: original.id,
      input: { userId: scenario.recruiter.two.userId },
    })

    expect(result.userId).toEqual(scenario.recruiter.two.userId)
  })

  scenario('deletes a recruiter', async (scenario: StandardScenario) => {
    const original = (await deleteRecruiter({
      id: scenario.recruiter.one.id,
    })) as Recruiter
    const result = await recruiter({ id: original.id })

    expect(result).toEqual(null)
  })
})
