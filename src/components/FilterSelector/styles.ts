import { createStyles } from "@mantine/core";

export const useStyles = createStyles(theme => ({
  root: {
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: 8,
    padding: theme.spacing.xs,
    "& .mantine-Select-input": {
      background: theme.colors.gray[2],
      border: "none"
    }
  }
}))