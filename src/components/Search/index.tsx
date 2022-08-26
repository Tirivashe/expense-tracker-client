import { Group, MediaQuery, Stack, Text, TextInput } from '@mantine/core'
import { FC } from 'react'
import { BiSearch } from "react-icons/bi"
import { IoIosMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom'
import { useDispatch } from '../../app/hooks';
import { toggleAside } from '../../redux/appState/appStateSlice';
import { useStyles } from './styles'

type Props = {
  isMobile: boolean
}

const Search: FC<Props> = ({ isMobile }) => {
  const dispatch = useDispatch()
  const { classes } = useStyles(isMobile)
  return (
    <>
      <MediaQuery query="(max-width: 528px)" styles={{ display: "none" }}>
        <Group
          position="apart"
          sx={{ width: isMobile ? "40%" : "35%" }}
          align="end"
          spacing="xs"
        >
          <TextInput
            placeholder="Search"
            variant="unstyled"
            icon={<BiSearch />}
            className={classes.search}
          />
          <Text className={classes.link} component={NavLink} to="#">
            Wallet
          </Text>
          <Text className={classes.link} component={NavLink} to="/settings">
            Settings
          </Text>
        </Group>
      </MediaQuery>
      <MediaQuery
        query="(min-width: 528px)"
        styles={{ width: "100%", display: "none" }}
      >
        <Group position='apart' align="start">
          <Stack sx={{ width: "inherit" }}>
            <TextInput
              placeholder="Search"
              variant="unstyled"
              icon={<BiSearch />}
              className={classes.search}
            />
            <Group position="apart">
              <Text className={classes.link} component={NavLink} to="#">
                Wallet
              </Text>
              <Text className={classes.link} component={NavLink} to="/settings">
                Settings
              </Text>
            </Group>
          </Stack>
          <IoIosMenu onClick={() => dispatch(toggleAside)} size={23}/>
        </Group>
      </MediaQuery>
    </>
  );
}

export default Search