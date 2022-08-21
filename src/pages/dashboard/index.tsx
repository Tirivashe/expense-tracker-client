import { Stack, Text } from '@mantine/core'
import { FC } from 'react'
import { CategoriesSummary, Search } from '../../components'
import { useStyles } from './style'

type Props = {}

const Dashboard: FC<Props> = () => {
  const { classes } = useStyles()
  return (
    <Stack className={ classes.root }>
      <Search />
      <Stack justify="space-between" className={classes.categoriesSummary}>
        <Text className={ classes.summaryText }>Categories Last 30 Days</Text>
        <CategoriesSummary />
      </Stack>

    </Stack>
  )
}

export default Dashboard