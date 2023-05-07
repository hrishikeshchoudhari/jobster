import type { ComponentMeta, ComponentStory } from '@storybook/react'

import JobsterLayout from './JobsterLayout'

export const generated: ComponentStory<typeof JobsterLayout> = (args) => {
  return <JobsterLayout {...args} />
}

export default {
  title: 'Layouts/JobsterLayout',
  component: JobsterLayout,
} as ComponentMeta<typeof JobsterLayout>
