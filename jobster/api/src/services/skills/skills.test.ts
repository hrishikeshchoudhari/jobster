import type { Skill } from '@prisma/client'

import { skills, skill, createSkill, updateSkill, deleteSkill } from './skills'
import type { StandardScenario } from './skills.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('skills', () => {
  scenario('returns all skills', async (scenario: StandardScenario) => {
    const result = await skills()

    expect(result.length).toEqual(Object.keys(scenario.skill).length)
  })

  scenario('returns a single skill', async (scenario: StandardScenario) => {
    const result = await skill({ id: scenario.skill.one.id })

    expect(result).toEqual(scenario.skill.one)
  })

  scenario('creates a skill', async (scenario: StandardScenario) => {
    const result = await createSkill({
      input: {
        employmentId: scenario.skill.two.employmentId,
        name: 'String',
        updatedAt: '2023-05-09T16:42:50.521Z',
      },
    })

    expect(result.employmentId).toEqual(scenario.skill.two.employmentId)
    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-09T16:42:50.521Z'))
  })

  scenario('updates a skill', async (scenario: StandardScenario) => {
    const original = (await skill({ id: scenario.skill.one.id })) as Skill
    const result = await updateSkill({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a skill', async (scenario: StandardScenario) => {
    const original = (await deleteSkill({ id: scenario.skill.one.id })) as Skill
    const result = await skill({ id: original.id })

    expect(result).toEqual(null)
  })
})
