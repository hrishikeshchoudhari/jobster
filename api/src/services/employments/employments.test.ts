import type { Employment } from '@prisma/client'

import {
  employments,
  employment,
  createEmployment,
  updateEmployment,
  deleteEmployment,
} from './employments'
import type { StandardScenario } from './employments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('employments', () => {
  scenario('returns all employments', async (scenario: StandardScenario) => {
    const result = await employments()

    expect(result.length).toEqual(Object.keys(scenario.employment).length)
  })

  scenario(
    'returns a single employment',
    async (scenario: StandardScenario) => {
      const result = await employment({ id: scenario.employment.one.id })

      expect(result).toEqual(scenario.employment.one)
    }
  )

  scenario('creates a employment', async (scenario: StandardScenario) => {
    const result = await createEmployment({
      input: {
        resumeId: scenario.employment.two.resumeId,
        employerName: 'String',
        startDate: '2023-05-09T16:42:42.293Z',
        endDate: '2023-05-09T16:42:42.293Z',
        role: 'String',
        description: 'String',
        updatedAt: '2023-05-09T16:42:42.293Z',
      },
    })

    expect(result.resumeId).toEqual(scenario.employment.two.resumeId)
    expect(result.employerName).toEqual('String')
    expect(result.startDate).toEqual(new Date('2023-05-09T16:42:42.293Z'))
    expect(result.endDate).toEqual(new Date('2023-05-09T16:42:42.293Z'))
    expect(result.role).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-09T16:42:42.293Z'))
  })

  scenario('updates a employment', async (scenario: StandardScenario) => {
    const original = (await employment({
      id: scenario.employment.one.id,
    })) as Employment
    const result = await updateEmployment({
      id: original.id,
      input: { employerName: 'String2' },
    })

    expect(result.employerName).toEqual('String2')
  })

  scenario('deletes a employment', async (scenario: StandardScenario) => {
    const original = (await deleteEmployment({
      id: scenario.employment.one.id,
    })) as Employment
    const result = await employment({ id: original.id })

    expect(result).toEqual(null)
  })
})
