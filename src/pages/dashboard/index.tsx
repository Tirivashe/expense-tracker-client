import { Stack } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FC } from 'react'
import { CategoriesSummary, Search, LatestTransactions, Profile } from '../../components'
import { useStyles } from './style'

type Props = {}

const Dashboard: FC<Props> = () => {
  const { classes } = useStyles()
  const isMobile = useMediaQuery('(max-width: 1345px)')
  return (
    <Stack className={ classes.root }>
      <Search isMobile={isMobile}/>
      <CategoriesSummary />
      <LatestTransactions />
      {!isMobile && <Profile />}
    </Stack>
  )
}

export default Dashboard