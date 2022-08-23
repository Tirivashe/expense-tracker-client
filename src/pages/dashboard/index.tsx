import { Stack, Text } from '@mantine/core'
import { FC } from 'react'
import { CategoriesSummary, Search, LatestTransactions, Profile } from '../../components'
import { useStyles } from './style'

type Props = {}

const Dashboard: FC<Props> = () => {
  const { classes } = useStyles()
  return (
    <Stack className={ classes.root }>
      <Search />
      <CategoriesSummary />
      <LatestTransactions />
      <Profile />
    </Stack>
  )
}

export default Dashboard