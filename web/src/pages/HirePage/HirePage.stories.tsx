import type { ComponentMeta } from '@storybook/react'

import HirePage from './HirePage'

export const generated = () => {
  return <HirePage />
}

export default {
  title: 'Pages/HirePage',
  component: HirePage,
} as ComponentMeta<typeof HirePage>
