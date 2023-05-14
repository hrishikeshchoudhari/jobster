import type { ComponentMeta } from '@storybook/react'

import RecruiterDashboardPage from './RecruiterDashboardPage'

export const generated = () => {
  return <RecruiterDashboardPage />
}

export default {
  title: 'Pages/RecruiterDashboardPage',
  component: RecruiterDashboardPage,
} as ComponentMeta<typeof RecruiterDashboardPage>
