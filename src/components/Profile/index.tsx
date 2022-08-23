import { Avatar, Group, Stack, Text, useMantineTheme } from '@mantine/core'
import React from 'react'
import { BiCog } from 'react-icons/bi'
import { BsPencil, BsWallet2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

type Props = {}

const Profile = (props: Props) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()
  return (
    <Stack
      justify="center"
      align="center"
      px="md"
      className={classes.root}
      spacing={5}
    >
      <Avatar size={80} />
      <Text size="sm" align="center">
        Hi{" "}
        <Text size="sm" component="span" weight="bold">
          Morgan Stanley 
        </Text>
      </Text>
      <Group position="apart" sx={{ width: "inherit" }}>
        <Text component={Link} to="/profile" color="dimmed" size="sm">
          Profile
        </Text>
        <BsPencil color={theme.colors.gray[6]} size={15} />
      </Group>
      <Group position="apart" sx={{ width: "inherit" }}>
        <Text component={Link} to="/settings" color="dimmed" size="sm">
          Settings
        </Text>
        <BiCog color={theme.colors.gray[6]} size={15} />
      </Group>
      <Group position="apart" sx={{ width: "inherit" }}>
        <Text component={Link} to="/#" color="dimmed" size="sm">
          Wallet
        </Text>
        <BsWallet2 color={theme.colors.gray[6]} size={15} />
      </Group>
    </Stack>
  );
}

export default Profile