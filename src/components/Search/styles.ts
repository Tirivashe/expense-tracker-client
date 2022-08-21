import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  search: {
    width: "60%",
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    padding: 0
  },
  link: {
    width: "auto",
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontSizes.sm,
  },
}));