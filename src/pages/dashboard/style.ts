import { createStyles } from "@mantine/core";

export const useStyles = createStyles(theme => ({
  root: {
    width: "80%",
    padding: "0 2.5rem"
  },
  categoriesSummary: {
    height: "3rem",
    marginTop: "2rem"
  },
  summaryText: {
    fontSize: theme.fontSizes.xl,
  }
}))