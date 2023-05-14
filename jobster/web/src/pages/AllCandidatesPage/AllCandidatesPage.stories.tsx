import type { ComponentMeta } from '@storybook/react'

import AllCandidatesPage from './AllCandidatesPage'

export const generated = () => {
  return <AllCandidatesPage />
}

export default {
  title: 'Pages/AllCandidatesPage',
  component: AllCandidatesPage,
} as ComponentMeta<typeof AllCandidatesPage>
