import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles((theme: MantineTheme) => ({
  chartTotal: {
    position: "absolute",
    top: "33%",
    left: 0,
    right: 50,
    marginLeft: "auto",
    marginRight: "auto",
    "& .chart-total-number": {
      color: theme.colors.teal[4],
    },
  },
}));