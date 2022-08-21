import { Navbar, NavLink, Stack, Text, Title } from '@mantine/core'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useStyles } from './styles'

type Props = {}

const AppNavbar: FC<Props> = () => {
  const { classes } = useStyles()
  const { pathname } = useLocation()
  return (
    <Navbar width={{ base: 270 }} pt="lg" withBorder={false} hidden hiddenBreakpoint="sm">
      <Stack align="end" sx={{ width: "100%" }} spacing="xl" justify="space-between">
        <Title sx={{ fontFamily: "Nunito", letterSpacing: "1px" }} order={2}>
          Tracker
        </Title>
        <Stack spacing="sm">
          <NavLink
            label="Home"
            component={Link}
            to="/"
            active={pathname === "/"}
            className={ classes.links }
           />
          <NavLink
            label="Categories"
            component={Link}
            to="/categories"
            active={pathname === "/categories"}
            className={ classes.links }
           />
          <NavLink
            label="Transactions"
            component={Link}
            to="/transactions"
            active={pathname === "/transactions"}
            className={ classes.links }
           />
          <NavLink
            label="Wallet"
            component={Link}
            to="/"
            className={ classes.links }
           />
          <NavLink
            label="Logout"
            component={Link}
            to="/auth"
            replace
            className={ classes.links }
           />
        </Stack>
      </Stack>
    </Navbar>
  );
}

export default AppNavbar