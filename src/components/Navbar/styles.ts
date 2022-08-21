import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles((theme: MantineTheme) => ({
  root: {},
  links: {
    textAlign: "start",
    fontFamily: "Nunito, sans-serif",
    color: theme.colors.gray[6],
    margin: 0,
    padding: 0,
    "&:hover, &[data-active=true]:hover": {
      color: theme.colors.gray[9],
      cursor: "pointer",
      background: "transparent",
    },
    "&[data-active=true]": {
      fontWeight: "bold",
      color: theme.colors.gray[9],
      cursor: "pointer",
      background: "transparent",
    },
  },
}));