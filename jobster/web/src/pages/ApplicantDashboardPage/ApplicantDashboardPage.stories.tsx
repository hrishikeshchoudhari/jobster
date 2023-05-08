import type { ComponentMeta } from '@storybook/react'

import ApplicantDashboardPage from './ApplicantDashboardPage'

export const generated = () => {
  return <ApplicantDashboardPage />
}

export default {
  title: 'Pages/ApplicantDashboardPage',
  component: ApplicantDashboardPage,
} as ComponentMeta<typeof ApplicantDashboardPage>
