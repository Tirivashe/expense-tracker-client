import { Navbar, NavLink, Stack, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useStyles } from './styles'
import { useLogoutMutation } from "../../redux/api/auth/authApiSlice" 

type Props = {}

const AppNavbar: FC<Props> = () => {
  const isMobile = useMediaQuery("(max-width: 1200px)");
  const [logout, { isSuccess }] = useLogoutMutation()

  const { classes } = useStyles()
  const { pathname } = useLocation()

  const logoutUser = () => {
    logout()
  }

  return (
    <Navbar width={{ base: 170 }} pt="lg" withBorder={false} hidden={isMobile} hiddenBreakpoint={1200}>
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
            onClick={logoutUser}
            to={isSuccess ? "/auth" : "#"}
            replace
            className={ classes.links }
           />
        </Stack>
      </Stack>
    </Navbar>
  );
}

export default AppNavbar