import { Group, Text, TextInput } from '@mantine/core'
import { FC } from 'react'
import { BiSearch } from "react-icons/bi"
import { NavLink } from 'react-router-dom'
import { useStyles } from './styles'

type Props = {}

const Search: FC<Props> = () => {
  const { classes } = useStyles()
  return (
    <Group position='apart' sx={{ width: "35%" }} align="end" spacing='xs'>
      <TextInput placeholder='Search' variant='unstyled' icon={<BiSearch />} className={classes.search}/>
      <Text className={classes.link} component={NavLink} to="#">Wallet</Text>
      <Text className={classes.link} component={NavLink} to="/settings">Settings</Text>
    </Group>
  )
}

export default Search