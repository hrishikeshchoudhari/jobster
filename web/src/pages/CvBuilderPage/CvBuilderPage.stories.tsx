import type { ComponentMeta } from '@storybook/react'

import CvBuilderPage from './CvBuilderPage'

export const generated = () => {
  return <CvBuilderPage />
}

export default {
  title: 'Pages/CvBuilderPage',
  component: CvBuilderPage,
} as ComponentMeta<typeof CvBuilderPage>
