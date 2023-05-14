import type { ComponentMeta, ComponentStory } from '@storybook/react'

import RecruiterLayout from './RecruiterLayout'

export const generated: ComponentStory<typeof RecruiterLayout> = (args) => {
  return <RecruiterLayout {...args} />
}

export default {
  title: 'Layouts/RecruiterLayout',
  component: RecruiterLayout,
} as ComponentMeta<typeof RecruiterLayout>
