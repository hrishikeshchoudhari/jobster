import type { ComponentMeta, ComponentStory } from '@storybook/react'

import InternalLayout from './InternalLayout'

export const generated: ComponentStory<typeof InternalLayout> = (args) => {
  return <InternalLayout {...args} />
}

export default {
  title: 'Layouts/InternalLayout',
  component: InternalLayout,
} as ComponentMeta<typeof InternalLayout>
