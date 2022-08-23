import { createStyles } from "@mantine/core";

export const useStyles = createStyles((_theme, { color }: { color: string }) => ({
  root: {
    background: color,
    height: "4rem",
    width: "auto",
    borderRadius: "5px",
  },
}));