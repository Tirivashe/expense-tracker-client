import { Aside, Center, NavLink, Stack, useMantineTheme } from '@mantine/core'
import { useSelector } from '../../app/hooks'
import { TbFlame } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'
import { selectIsAsideOpen } from '../../redux/appState/appStateSlice'

type Props = {}

const AppAside = (props: Props) => {
  const isAsideOpen = useSelector(selectIsAsideOpen)
  const theme = useMantineTheme()
  const { pathname } = useLocation();
  return (
    <Aside
      width={{ base: 270 }}
      pt="lg"
      withBorder={false}
      hidden={true}
      hiddenBreakpoint={4800}
    >
      <Stack sx={{ width: "100%", height: "100%" }} color={theme.primaryColor}>
        <Center>
          <TbFlame size={25} color="white" />
        </Center>
        <NavLink
          label="Home"
          component={Link}
          to="/"
          active={pathname === "/"}
        />
        <NavLink
          label="Categories"
          component={Link}
          to="/categories"
          active={pathname === "/categories"}
        />
        <NavLink
          label="Transactions"
          component={Link}
          to="/transactions"
          active={pathname === "/transactions"}
        />
        <NavLink label="Wallet" component={Link} to="/#" />
        <NavLink label="Logout" component={Link} to="/auth" replace />
      </Stack>
    </Aside>
  );
}

export default AppAside