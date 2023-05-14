import type { Applicant } from '@prisma/client'

import {
  applicants,
  applicant,
  createApplicant,
  updateApplicant,
  deleteApplicant,
} from './applicants'
import type { StandardScenario } from './applicants.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('applicants', () => {
  scenario('returns all applicants', async (scenario: StandardScenario) => {
    const result = await applicants()

    expect(result.length).toEqual(Object.keys(scenario.applicant).length)
  })

  scenario('returns a single applicant', async (scenario: StandardScenario) => {
    const result = await applicant({ id: scenario.applicant.one.id })

    expect(result).toEqual(scenario.applicant.one)
  })

  scenario('creates a applicant', async (scenario: StandardScenario) => {
    const result = await createApplicant({
      input: { userId: scenario.applicant.two.userId },
    })

    expect(result.userId).toEqual(scenario.applicant.two.userId)
  })

  scenario('updates a applicant', async (scenario: StandardScenario) => {
    const original = (await applicant({
      id: scenario.applicant.one.id,
    })) as Applicant
    const result = await updateApplicant({
      id: original.id,
      input: { userId: scenario.applicant.two.userId },
    })

    expect(result.userId).toEqual(scenario.applicant.two.userId)
  })

  scenario('deletes a applicant', async (scenario: StandardScenario) => {
    const original = (await deleteApplicant({
      id: scenario.applicant.one.id,
    })) as Applicant
    const result = await applicant({ id: original.id })

    expect(result).toEqual(null)
  })
})
