import type { Education } from '@prisma/client'

import {
  educations,
  education,
  createEducation,
  updateEducation,
  deleteEducation,
} from './educations'
import type { StandardScenario } from './educations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('educations', () => {
  scenario('returns all educations', async (scenario: StandardScenario) => {
    const result = await educations()

    expect(result.length).toEqual(Object.keys(scenario.education).length)
  })

  scenario('returns a single education', async (scenario: StandardScenario) => {
    const result = await education({ id: scenario.education.one.id })

    expect(result).toEqual(scenario.education.one)
  })

  scenario('creates a education', async (scenario: StandardScenario) => {
    const result = await createEducation({
      input: {
        resumeId: scenario.education.two.resumeId,
        instituteName: 'String',
        startYear: 9560939,
        endYear: 4868708,
        topic: 'String',
        level: 'SCHOOL',
        updatedAt: '2023-05-09T16:42:32.894Z',
      },
    })

    expect(result.resumeId).toEqual(scenario.education.two.resumeId)
    expect(result.instituteName).toEqual('String')
    expect(result.startYear).toEqual(9560939)
    expect(result.endYear).toEqual(4868708)
    expect(result.topic).toEqual('String')
    expect(result.level).toEqual('SCHOOL')
    expect(result.updatedAt).toEqual(new Date('2023-05-09T16:42:32.894Z'))
  })

  scenario('updates a education', async (scenario: StandardScenario) => {
    const original = (await education({
      id: scenario.education.one.id,
    })) as Education
    const result = await updateEducation({
      id: original.id,
      input: { instituteName: 'String2' },
    })

    expect(result.instituteName).toEqual('String2')
  })

  scenario('deletes a education', async (scenario: StandardScenario) => {
    const original = (await deleteEducation({
      id: scenario.education.one.id,
    })) as Education
    const result = await education({ id: original.id })

    expect(result).toEqual(null)
  })
})
